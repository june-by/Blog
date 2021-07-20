import React from 'react';
import AppLayout from "../components/AppLayout";
import Head from 'next/head';

const Signup = () => {
    return (
        <>
            <Head>
                <title>블로그소개</title>
            </Head>
            <AppLayout>
                <div>블로그소개페이지입니다</div>
            </AppLayout>
        </>
    );
}

export default Signup;