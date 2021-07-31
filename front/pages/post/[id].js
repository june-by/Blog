import AppLayout from "../../components/AppLayout";
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { LOAD_CURPOST_REQUEST } from "../../reducers/post";
import ReactHtmlParser from 'html-react-parser'
import { PageHeader, Tag} from 'antd';
import { current } from "immer";

//More button을 누르면, 해당 글의 id를 가지고 Post Component로 온다
//그렇다면 나는 서버로 해당 id에 해당하는 글을 가지고 와서 이를 보여주면댐.
const Post = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { id } = router.query;
    const { currentPost } = useSelector((state) => state.post);
    
    useEffect(()=>{
        console.log(id);
        if(id){
            dispatch({
                type : LOAD_CURPOST_REQUEST,
                data : id,
            })
        }
        
    },[id])

    return (
        <AppLayout>
            {currentPost && <div style = {{textAlign : "right", marginRight : "10px", marginTop : "20px"}}>작성일자 : {currentPost.createdAt.substr(0,10)}</div>}
            {currentPost && <h1 style = {{textAlign : "center", marginTop : "30px"}}>{currentPost.title}</h1>}
            {currentPost && <PageHeader
            className="site-page-header"
            tags = {<Tag color = "blue">{currentPost.category}</Tag>}
            subTitle={currentPost.hashTag}
            />}
            <div style = {{marginLeft : "10px"}}>{currentPost &&ReactHtmlParser(currentPost.content)}</div>
        </AppLayout>
    )
};

export default Post;