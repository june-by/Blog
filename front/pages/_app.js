/* eslint-disable react/prop-types */
//page의 공통 부분 처리
import React from 'react';
import 'antd/dist/antd.css';
import PropTypes from 'prop-types'
import Head from 'next/head'; //Head component

const Nodebird = ({ Component }) => {
    return (
        <>
            <Head>
                <meta charSet="utf-8"></meta>
                <title>BYjuun</title>
            </Head>
            <Component />
        </>
    );
}

Nodebird.propTypes = {
    Componenet: PropTypes.elementType.isRequired,
}

export default Nodebird;