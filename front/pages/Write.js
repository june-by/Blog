import React from 'react';
import AppLayout from "../components/AppLayout";
import Head from 'next/head';
import WritePostForm from '../components/WritePostForm';
const Write = () => {
    return (
        <>
            <Head>
                <title>글쓰기</title>
            </Head>
            <AppLayout>
                <WritePostForm />
            </AppLayout>
        </>
    );
}

export default Write;