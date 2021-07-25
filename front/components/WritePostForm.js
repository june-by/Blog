import React, { useCallback, useEffect, useState } from 'react';
import useInput from '../hooks/useInput';
import styled from 'styled-components';
import { Button, Form, Input, Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { addPost, ADD_POST_REQUEST } from "../reducers/post";
import Router from 'next/router';
const LoginButton = styled(Button)`


margin-right : 10px;
`;

const ButtonWrapper = styled.div`
margin-top : 10px;
`
const FormWrapper = styled(Form)`
padding : 10px;
`;

const WritePostForm = () => {
    const dispatch = useDispatch();
    const { addPostLoading,addPostDone } = useSelector((state) => state.post);
    const [title, onChangeTitle] = useInput('');
    const [category, setCategory] = useState('');
    const [content, onChangeContent] = useInput('');
    const [hashTag, onChangeHashtag] = useInput('');
    const { TextArea } = Input;


    const onSubmitForm = useCallback(() => {
        const hashTagSplit = [];
        hashTag.split(/(#[^\s#]+)/g).map((v)=>{
            if(v.match(/(#[^\s#]+)/)){
                hashTagSplit.push(v);
            }
        })
        dispatch({
            type : ADD_POST_REQUEST,
            data : {
                title, category, hashTagSplit, content,
            }
        })
        setTimeout(()=>{ //여기 나중에 res.redirect('/')이런식으로 바꿔줘야함.
            Router.push('/');
        },1000 );
    }, [title,category,hashTag,content]);

    const handleTeacherChange = useCallback((value)=>{
        setCategory(value);
    },[category])

    return (
        <FormWrapper onFinish={onSubmitForm}>
            <div>
                <label htmlFor='title'>제목</label>
                <br />
                <TextArea value= {title} onChange={onChangeTitle} style={{ width: "100%" }} />
            </div>
            <div>
                <label htmlFor='belong'>카테고리</label>
                <br />
                <Select  style={{ width: "100%" }}  onChange={handleTeacherChange}>
                    <Select.Option value="JavaScript">JavaScript</Select.Option>
                    <Select.Option value="React">React</Select.Option>
                </Select>
            </div>
            <div>
                <label htmlFor='hashtag'>해시태그</label>
                <br />
                <TextArea value= {hashTag} onChange={onChangeHashtag} style={{ width: "100%" }} />
            </div>
            <div>
                <label htmlFor='Content'>내용</label>
                <TextArea value= {content} onChange={onChangeContent} style={{ width: "100%", height: "700px" }} />
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