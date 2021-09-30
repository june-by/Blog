/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */

import PropTypes from 'prop-types';
import { Form, Input, Button ,message} from 'antd';
import { useCallback,useEffect } from 'react';
import useInput from '../hooks/useInput';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_COMMENT_REQUEST } from '../reducers/post';


const CommentForm = ({ postId }) => {

    const [comment, onChangeComment, setComment] = useInput('');
    const {addCommentLoading, addCommentError} = useSelector((state)=>state.post);
    const dispatch = useDispatch();

    useEffect(()=>{
        if(addCommentError){
            message.error(addCommentError);
            setComment('');
        }
    },[addCommentError])

    const onSubmitComment = useCallback(() => {
        dispatch({
            type : ADD_COMMENT_REQUEST,
            data : {postId, comment}
        })
        setComment('');
    }, [comment]);



    return (
        <Form onFinish={onSubmitComment} style = {{display : "flex", paddingTop : "15px", height : "100px", paddingBottom : "15px"}}>
            <Input placeholder = "댓글을 입력해주세요. 과도한 비난은 피해주시면 감사하겠습니다. " name="user-comment" type="text" value={comment} onChange={onChangeComment} 
            style = {{marginRight : "20px", marginLeft : "15px", borderRadius : "20px"}} required />
            <Button type="primary" htmlType="submit" loading = {addCommentLoading} style= {{marginRight : "15px", marginTop : "20px",borderRadius : "20px"}} >입력</Button>
        </Form>
    );
};

CommentForm.prototype = {
    postId: PropTypes.number.isRequired
}

export default CommentForm;