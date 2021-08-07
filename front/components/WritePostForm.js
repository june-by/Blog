import React, { useCallback, useEffect, useState } from 'react';
import useInput from '../hooks/useInput';
import styled, { createGlobalStyle } from 'styled-components';
import { Button, Form, Input, Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { addPost, ADD_POST_REQUEST, UPDATE_POST_REQUEST } from "../reducers/post";
import Router from 'next/router';
import dynamic from 'next/dynamic'
const Editor = dynamic(() => import('./Editor'), {
    ssr: false
})


export const Global = createGlobalStyle`
    .ck.ck-reset, .ck.ck-reset_all, .ck.ck-reset_all *{
        margintop : 15px;
    }
    .ck.ck-editor {
        margin-top : 15px;
    }
    .ck-content { 
        height : 500px;
    }
`;

const LoginButton = styled(Button)`
margin-right : 10px;
`;

const ButtonWrapper = styled.div`
margin-top : 10px;
`
const FormWrapper = styled(Form)`
padding : 10px;
`;



const WritePostForm = ({ id }) => {
    const dispatch = useDispatch();
    const { addPostLoading, updatePostDone } = useSelector((state) => state.post);
    const [title, onChangeTitle] = useInput('');
    const [category, setCategory] = useState('');
    const [content, onChangeContent, setContent] = useInput('');
    const [hashTag, onChangeHashtag] = useInput('');
    const { TextArea } = Input;

    useEffect(() => {
        if (updatePostDone) {
            alert(updatePostDone);
            setTimeout(() => { //여기 나중에 res.redirect('/')이런식으로 바꿔줘야함.
                Router.push('/');
            }, 1000);
        }
    }, [updatePostDone])


    const onSubmitForm = useCallback(() => {
        if (id) {
            dispatch({
                type: UPDATE_POST_REQUEST,
                data: {
                    title, category, hashTag, content, id
                }
            })
        } else {
            dispatch({
                type: ADD_POST_REQUEST,
                data: {
                    title, category, hashTag, content,
                }
            })
        }

    }, [title, category, hashTag, content, id]);


    const handleTeacherChange = useCallback((value) => {
        setCategory(value);
    }, [category])


    return (

        <FormWrapper onFinish={onSubmitForm}>
            <Global />
            <div>
                <label htmlFor='title'>제목</label>
                <br />
                <TextArea value={title} onChange={onChangeTitle} style={{ width: "100%" }} />
            </div>
            <div>
                <label htmlFor='belong'>카테고리</label>
                <br />
                <Select style={{ width: "100%" }} onChange={handleTeacherChange}>
                    <Select.Option value="JavaScript">JavaScript</Select.Option>
                    <Select.Option value="React">React</Select.Option>
                    <Select.Option value="TypeScript">TypeScript</Select.Option>
                    <Select.Option value="Database">Database</Select.Option>
                    <Select.Option value="OperatingSystem">OperatingSystem</Select.Option>
                    <Select.Option value="Browser">Browser</Select.Option>
                    <Select.Option value="Error">Error</Select.Option>
                </Select>
            </div>
            <div>
                <label htmlFor='hashtag'>해시태그</label>
                <br />
                <TextArea value={hashTag} onChange={onChangeHashtag} style={{ width: "100%" }} />
            </div>
            <div>
                <label htmlFor='content'>내용</label>
                <br />
                <Editor setContent={setContent} />
            </div>
            <ButtonWrapper>
                <LoginButton type="primary"
                    htmlType="submit"
                    loading={addPostLoading}>등록</LoginButton>
            </ButtonWrapper>

        </FormWrapper>

    );
}

export default WritePostForm;