/* eslint-disable react/react-in-jsx-scope */
import AppLayout from "../../components/AppLayout";
import  Router, {useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect } from "react";
import {FormOutlined, ExclamationCircleOutlined} from '@ant-design/icons'
import { LOAD_CURPOST_REQUEST,REMOVE_POST_REQUEST } from "../../reducers/post";
import ReactHtmlParser from 'html-react-parser'
import { PageHeader, Tag, Comment, Avatar, Button,message, Modal} from 'antd';
import CommentForm from '../../components/CommentForm';
import wrapper from "../../store/configureStore";
import { END } from 'redux-saga';
import axios from 'axios'
import { LOAD_MY_INFO_REQUEST } from '../../reducers/user'
import moment from 'moment';
const { confirm } = Modal;
moment.locale("ko");
const Post = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { id } = router.query;
    const { currentPost,removePostDone , removePostLoading, loadCurpostError} = useSelector((state) => state.post);
    const {me} = useSelector((state)=>state.user);

    useEffect(()=>{
        if(loadCurpostError){
            message.error(loadCurpostError);
        }
    },[loadCurpostError])

    useEffect(()=>{
        if(removePostDone){
            message.success("해당 글이 삭제되었습니다");
            Router.push('/');
        }
    },[removePostDone])

    const onClickDelete = useCallback(()=>{
        confirm({
            title: '이 게시글을 정말 삭제하시겠습니까?',
            icon: <ExclamationCircleOutlined />,
            onOk() {
                dispatch({
                    type : REMOVE_POST_REQUEST,
                    data : id,
                 })
            },
          });
    },[]);

    return (
        <AppLayout>
            <div >
            {me && me.nickname === "By_juun" &&
                <div style = {{textAlign : "right" , marginTop : "15px"}}>
                    {me && me.email === "neostgeart@gmail.com" 
                    && <Button style = {{backgroundColor : "lightblue"}}><a  href = {`/UpdatePost/${id}`}>글 수정</a></Button>}
                    {me && me.email === "neostgeart@gmail.com" 
                    && <Button style = {{backgroundColor : "palevioletred"}} onClick = {onClickDelete} loading = {removePostLoading}>글 삭제</Button>}
                </div>
            }
            
            {currentPost && <div style = {{textAlign : "right", marginRight : "10px", marginTop : "20px"}}>{moment(currentPost.createdAt).format('L')}</div>}
            {currentPost && <h1 style = {{textAlign : "center", marginTop : "30px"}}>{currentPost.title}</h1>}
            {currentPost && <PageHeader
            className="site-page-header"
            tags = {<Tag color = "blue">{currentPost.category}</Tag>}
            subTitle={currentPost.hashTag}
            />}
            <div style = {{marginLeft : "15px",marginRight : "15px",minHeight : "700px"}}>{currentPost && ReactHtmlParser(currentPost.content)}</div>
            {me ? <CommentForm postId = {id}/> : <div style = {{textAlign : "center", marginTop : "15px",marginBottom : "15px", fontSize : "20px"}}><FormOutlined /><div>댓글을 작성하려면 로그인 해주세요</div></div>}
            <div style = {{borderTop : "0.5px solid lightsteelblue" , marginTop : "10px", marginRight : "15px", marginLeft : "15px", marginBottom : "15px"}}>
            {currentPost && currentPost.Comments 
            &&
            currentPost.Comments.map((commentInfo) => <Comment key = {commentInfo.id}  
             datetime = {moment(commentInfo.createdAt,"YYYYMMDD").format('L')}
             author = {commentInfo.User.nickname} 
             content = {commentInfo.content} 
             avatar = {
                 <Avatar style={{backgroundColor : commentInfo.User.color}}>{commentInfo.User.nickname[0]}</Avatar>
             }>
             </Comment> )
            }
            </div>
            </div>
        </AppLayout>
    )
};

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
    //원래 브라우저에서 cookie를 알아서 넣어주는데 , SSR시에는 브라우저 개입을 못하니까 프론트서버에서 헤더에 쿠키를 넣어서 보내줘야 한다.
    const cookie = context.req ? context.req.headers.cookie : '';
    axios.defaults.headers.Cookie = '';
    if (context.req && cookie) {
      axios.defaults.headers.Cookie = cookie;
    }
    context.store.dispatch({
      type: LOAD_MY_INFO_REQUEST,
    })
    context.store.dispatch({
        type : LOAD_CURPOST_REQUEST,
        data : context.params.id,
    })

    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  });
  

export default Post;