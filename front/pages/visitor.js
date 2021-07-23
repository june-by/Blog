import React from 'react';
import AppLayout from "../components/AppLayout";
import Head from 'next/head';

const Signup = () => {
    return (
        <>
            <Head>
                <title>방명록</title>
            </Head>
            <AppLayout>
                <div>방명록입니다</div>
            </AppLayout>
        </>
    );
}

export default Signup;