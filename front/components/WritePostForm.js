import React , {useCallback} from 'react';
import useInput from '../hooks/useInput';
import styled from 'styled-components';
import {Button,Form,Input } from 'antd';
import { useDispatch } from 'react-redux';
import addPost from "../reducers/post";
const LoginButton = styled(Button)`

margin-right : 10px;
`;

const ButtonWrapper = styled.div`
margin-top : 10px;
`
const FormWrapper = styled(Form)`
padding : 10px;
`;

const WritePostForm = ()=>{
    const dispatch = useDispatch();
    const [title, onChangeTitle] = useInput('');
    const [content, onChangeContent] = useInput('');
    const [hashTag, onChangeHashtag] = useInput('');
    const {TextArea} = Input;
    const onSubmitForm = useCallback(() => {
        dispatch(addPost);
    },[]);

    return(
        <FormWrapper onFinish = {onSubmitForm}>
        <div>
            <label htmlFor='title'>제목</label>
            <br />
            <TextArea onChange = {onChangeTitle} style={{width : "100%"}}/>
        </div>
        <div>
            <label htmlFor='hashtag'>해시태그</label>
            <br />
            <TextArea onChange = {onChangeHashtag} style={{width : "100%"}}/>
        </div>
        <div>
            <label htmlFor='Content'>내용</label>
            <TextArea onChange = {onChangeContent} style={{width : "100%" ,height : "700px"}}/>
        </div>
        <ButtonWrapper>
            <LoginButton type="primary"
                htmlType="submit"
                loading={false}>등록</LoginButton>
        </ButtonWrapper>
    </FormWrapper>
    );
}

export default WritePostForm;