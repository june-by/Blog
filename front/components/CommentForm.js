
import PropTypes from 'prop-types';
import { Form, Input, Button } from 'antd';
import Link from 'next/link';
import { useCallback } from 'react';
import useInput from '../hooks/useInput';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_COMMENT_REQUEST } from '../reducers/post';

const CommentForm = ({ postId }) => {

    const [comment, onChangeComment, setComment] = useInput('');
    const {addCommentLoading} = useSelector((state)=>state.post);
    const dispatch = useDispatch();
    const onSubmitComment = useCallback(() => {
        dispatch({
            type : ADD_COMMENT_REQUEST,
            data : {postId, comment}
        })
    }, [comment]);

    return (
        <Form onFinish={onSubmitComment} style = {{display : "flex", paddingTop : "15px", height : "100px"}}>
            <Input name="user-comment" type="text" value={comment} onChange={onChangeComment} style = {{marginRight : "20px", marginLeft : "15px"}} required />
            <Button type="primary" htmlType="submit" loading = {addCommentLoading} style= {{marginRight : "15px", marginTop : "25px"}} >입력</Button>
        </Form>
    );
};

CommentForm.prototype = {
    postId: PropTypes.number.isRequired
}

export default CommentForm;