import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { Menu, Row, Col, Card, Button, Input, Avatar } from "antd";
import styled, { createGlobalStyle } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { LOG_OUT_REQUEST } from "../reducers/user";
import {
  MailOutlined,
  GithubOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import { Footer } from "antd/lib/layout/layout";
import MenuComponent from "./MenuComponent";
import Tags from "./Tags";
const { Search } = Input;
const { Meta } = Card;
import img from "../public/Original.png";

const SearchWrapper = styled.div`
  width: 80%;
  margin: auto;
  margin-top: 25px;
  margin-bottom: 25px;
`;

const RowWrapper = styled(Row)`
  border-top: 0.1px solid #f0f0f0;
`;

const ButtonWrapper = styled(Button)`
  border: none;
`;

const MainLogo = styled.div`
  border: 0.1px solid lightgrey;
  background-image: url(${img});
  width: 50px;
  height: 50px;
  background-size: 75px;
  background-position: 50%;
  border-radius: 70%;
  overflow: hidden;
  float: left;
  margin-top: 10px;
  margin-left: 175px;
  margin-right: 175px;
`;

export const Global = createGlobalStyle`
    .ant-card-meta-title{
        margin-top : 20px;
    }
`;

const AppLayout = ({ children }) => {
  const { me, logOutLoading } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [mobileview, setMobileview] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [mobileSearch, setMobileSearch] = useState(false);
  const onLogout = useCallback(() => {
    dispatch({
      type: LOG_OUT_REQUEST,
    });
  }, []);

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 576
        ? setMobileview(true)
        : setMobileview(false);
    };
    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  const onSearch = useCallback((value) => {
    location.href = `/SearchPost/${value}`;
  }, []);

  const toggleCollapsed = useCallback(() => {
    if (!collapsed) {
      if (mobileSearch) {
        setMobileSearch(false);
      }
    }
    setCollapsed(!collapsed);
  }, [collapsed, mobileSearch]);

  const onClickSearchMenu = useCallback(() => {
    if (!mobileSearch) {
      if (collapsed) {
        setCollapsed(false);
      }
    }
    setMobileSearch(!mobileSearch);
  }, [mobileSearch, collapsed]);

  return (
    <div>
      <div
        style={{
          position: "fixed",
          zIndex: 1,
          width: "100%",
          borderBottom: "0.1px solid lightgrey",
          backgroundColor: "white",
          boxShadow: "lightgrey 1px 1px 3px 1px",
        }}
      >
        {!mobileview && (
          <Link href="/">
            <a>
              {" "}
              <MainLogo></MainLogo>
            </a>
          </Link>
        )}

        <Menu
          mode="horizontal"
          style={{ height: "57px", borderBottom: "none", marginTop: "15px" }}
        >
          {mobileview && (
              <>
            <Menu.Item>
              <Button
                onClick={toggleCollapsed}
                style={{ marginBottom: 16, border: "none" }}
              >
                {React.createElement(
                  collapsed ? MenuUnfoldOutlined : MenuFoldOutlined
                )}
              </Button>
            </Menu.Item>
            <Menu.Item>
            <Link href="/">
              <a>Home</a>
            </Link>
          </Menu.Item>

            </>
          )}
          
          {me ? null : (
            <Menu.Item style={{ verticalAlign: "middle" }}>
              <Link href="/login">
                <a>로그인</a>
              </Link>
            </Menu.Item>
          )}
          {!me && (
            <Menu.Item>
              <Link href="/signup">
                <a>회원가입</a>
              </Link>
            </Menu.Item>
          )}
          {me && me.email === "neostgeart@gmail.com" && (
            <Menu.Item>
              <Link href="/Write">
                <a>글쓰기</a>
              </Link>
            </Menu.Item>
          )}
          {mobileview && (
            <Menu.Item onClick={onClickSearchMenu}>게시글 검색</Menu.Item>
          )}
          <Menu.Item>
            <Link href="/profile">
              <a>프로필</a>
            </Link>
          </Menu.Item>
          
        </Menu>
      </div>

      <div style={{ paddingTop: "70px" }}>
        <RowWrapper>
            
          <Col xs={24} sm={6} md={6}>
            {" "}
            {/* 24등분 xs 모바일 md 데스크탑*/}
            {me && !mobileview && (
              <div stlye={{ textAlign: "center" }}>
                <Card
                  actions={[
                    <ButtonWrapper
                      key="1"
                      onClick={onLogout}
                      loading={logOutLoading}
                    >
                      로그아웃
                    </ButtonWrapper>,
                    <ButtonWrapper key="2" href="/changeNickname">
                      닉네임변경
                    </ButtonWrapper>,
                  ]}
                  style={{ minHeight: "172px" }}
                >
                  <Global />
                  <Meta
                    avatar={
                      <Avatar style={{ backgroundColor: me.color }} size={64}>
                        {me.nickname[0]}
                      </Avatar>
                    }
                    title={`환영합니다! ${me.nickname}님`}
                  />
                </Card>
              </div>
            )}
            {!mobileview &&  (
              <>
                <SearchWrapper>
                  <Search
                    placeholder="게시글 검색"
                    onSearch={onSearch}
                    enterButton
                  />
                </SearchWrapper>
                <MenuComponent></MenuComponent>
              </>
            )}
            {mobileview && mobileSearch && (
              <SearchWrapper>
                <Search
                  placeholder="게시글 검색"
                  onSearch={onSearch}
                  enterButton
                />
              </SearchWrapper>
            )}
            {collapsed &&  mobileview && (
              <div style={{ position: "fixed", zIndex: "2", width: "100%" }}>
                {me && (
                  <div stlye={{ textAlign: "center" }}>
                    <Card
                      actions={[
                        <ButtonWrapper
                          key="1"
                          onClick={onLogout}
                          loading={logOutLoading}
                        >
                          로그아웃
                        </ButtonWrapper>,
                        <ButtonWrapper key="2" href="/changeNickname">
                          닉네임변경
                        </ButtonWrapper>,
                      ]}
                    >
                      <Global />
                      <Meta
                        avatar={
                          <Avatar
                            style={{ backgroundColor: me.color }}
                            size={64}
                          >
                            {me.nickname[0]}
                          </Avatar>
                        }
                        title={`환영합니다! ${me.nickname}님`}
                      />
                    </Card>
                  </div>
                )}
                <MenuComponent></MenuComponent>
              </div>
            )}
          </Col>
          <Col
            xs={24}
            sm={18}
            md={12}
            style={{
              borderLeft: "0.1px solid #f0f0f0",
              borderRight: "0.1px solid #f0f0f0",
              height: "auto",
              minHeight: "881px",
            }}
          >
            {children}
            {mobileview && (
              <div>
                <div
                  style={{
                    textAlign: "center",
                    fontSize: "16px",
                    marginTop: "15px",
                  }}
                >
                  <MailOutlined />{" "}
                  <div style={{ display: "inline-block" }}>
                    neostgeart@gmail.com
                  </div>
                </div>
                <div
                  style={{
                    textAlign: "center",
                    fontSize: "16px",
                    marginTop: "15px",
                    marginBottom: "15px",
                  }}
                >
                  <GithubOutlined />{" "}
                  <a href="https://github.com/BY-juun">
                    https://github.com/BY-juun
                  </a>
                </div>
              </div>
            )}
          </Col>
          <Col xs={0} sm={0} md={6}>
              <Tags></Tags>
          </Col>
        </RowWrapper>
      </div>
      <Footer style={{ textAlign: "center", background: "lightsteelblue" }}>
        ByJuun.com @2021 Created by By_Juun
      </Footer>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
