import AppLayout from "../../components/AppLayout";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import React, { useCallback, useEffect, useState } from "react";
import Head from "next/head";
import { LOAD_CATEGORYPOSTS_REQUEST } from "../../reducers/post";
import { Pagination } from "antd";
import { LOAD_MY_INFO_REQUEST } from "../../reducers/user";
import wrapper from "../../store/configureStore";
import { END } from "redux-saga";
import axios from "axios";
import ListComponent from "../../components/ListComponent";


const category = () => {
  const dispatch = useDispatch();
  const [current, setCurrent] = useState(1);
  const {Posts, currentPageNum} = useSelector((state)=>(state.post));

  
  const router = useRouter();
  const { category } = router.query;

  useEffect(()=>{
    setCurrent(currentPageNum);
  },[currentPageNum]);

  const onChange = useCallback(
    (page) => {
      return dispatch({
        type : LOAD_CATEGORYPOSTS_REQUEST,
        data : {
          category : category,
          page : page,
        }
      })
    },
    [category]
  );

  return (
    <>
      <Head>
        <title>{category}</title>
      </Head>
      <AppLayout>
        <h1 style={{ marginTop: "45px", textAlign: "center" }}>{category}</h1>
        <ListComponent Posts = {Posts}/>
        <Pagination
          style={{
            textAlign: "center",
            marginTop: "20px",
            marginBottom: "15px",
          }}
          current={current}
          onChange={onChange}
          total={20}
        />
      </AppLayout>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    //원래 브라우저에서 cookie를 알아서 넣어주는데 , SSR시에는 브라우저 개입을 못하니까 프론트서버에서 헤더에 쿠키를 넣어서 보내줘야 한다.
    const cookie = context.req ? context.req.headers.cookie : "";
    axios.defaults.headers.Cookie = "";
    if (context.req && cookie) {
      axios.defaults.headers.Cookie = cookie;
    }
    context.store.dispatch({
      type: LOAD_MY_INFO_REQUEST,
    });
    context.store.dispatch({
      type: LOAD_CATEGORYPOSTS_REQUEST,
      data: {
        category : context.params.category,
        page : 1
      }
    });
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  }
);

export default category;
