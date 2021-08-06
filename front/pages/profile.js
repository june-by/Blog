import React from 'react';
import AppLayout from "../components/AppLayout";
import Head from 'next/head';
import { Descriptions } from 'antd';
import wrapper from "../store/configureStore";
import { END } from 'redux-saga';
import axios from 'axios';
import { LOAD_MY_INFO_REQUEST } from '../reducers/user'

const Profile = () => {
    return (
        <>
            <Head>
                <title>프로필</title>
            </Head>
            <AppLayout>
                <Descriptions title="By-Juun(안병준)" bordered size = "dfault" style = {{textAlign:"center", marginTop : "15px"}}>
                    <Descriptions.Item label="한줄소개" span={2}>JavaScript를 사랑하는 개발자</Descriptions.Item>
                    <Descriptions.Item label="Github "><a href="https://github.com/BY-juun">https://github.com/BY-juun</a></Descriptions.Item>
                    <Descriptions.Item label="From" span={2}>
                        Ajou University 
                        <br />
                        Department of Software
                    </Descriptions.Item>
                    <Descriptions.Item label="Birth">1998.06.13</Descriptions.Item>
                    <Descriptions.Item label="History" span={2}>
                        2017 아주대학교 소프트웨어학과
                        <br />
                        2021년 Github활동시작
                        <br />
                        2021년 블로그개설
                        <br />
                    </Descriptions.Item>
                    <Descriptions.Item label="Technical_Stack" span={3}>
                        HTML/CSS/JavaScript
                        <br />
                        React, ReactHooks
                        <br />
                        NextJs (SSR)
                        <br />
                        NodeJS, Express
                        <br />
                        Sequelize, Mongoose
                        <br />
                    </Descriptions.Item>
                </Descriptions>
            </AppLayout>
        </>
    );
}

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
    console.log('getServerSideProps start');
    console.log(context.req.headers);
    const cookie = context.req ? context.req.headers.cookie : '';
    axios.defaults.headers.Cookie = '';
    if (context.req && cookie) {
      axios.defaults.headers.Cookie = cookie;
    }
    context.store.dispatch({
      type: LOAD_MY_INFO_REQUEST,
    });
    context.store.dispatch(END);
    console.log('getServerSideProps end');
    await context.store.sagaTask.toPromise();
  });

export default Profile;