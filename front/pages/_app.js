/* eslint-disable react/prop-types */
//page의 공통 부분 처리
import React,{useEffect} from 'react';
import 'antd/dist/antd.css';
import PropTypes from 'prop-types'
import Head from 'next/head'; //Head component
import wrapper from '../store/configureStore';
import '../styles.css'
import { useRouter } from 'next/router'
import * as ga from '../lib/ga';

const ByJuun = ({ Component }) => {
    const router = useRouter()
    useEffect(() => {
        const handleRouteChange = (url) => {
          ga.pageview(url)
        }
        router.events.on('routeChangeComplete', handleRouteChange)
    
        return () => {
          router.events.off('routeChangeComplete', handleRouteChange)
        }
      }, [router.events])
    return (
        <>
            <Head>
                <meta charSet="utf-8"></meta>
                <title>BY-juun Blog</title>
                <link rel="shortcut icon" href="/favicon.ico" />
                <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/styles/base16/rebecca.min.css"/>
                <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/highlight.min.js"></script> 
                <script>hljs.highlightAll();</script>
            </Head>
            <Component />
        </>
    );
}

ByJuun.propTypes = {
    Component: PropTypes.elementType.isRequired,
}

export default wrapper.withRedux(ByJuun);