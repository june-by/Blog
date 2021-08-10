import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Row, Col, Card, Calendar, Tag, Divider, Button, Input, Avatar } from 'antd';
import styled, { createGlobalStyle } from "styled-components";
import { useSelector, useDispatch } from 'react-redux';
import { LOG_OUT_REQUEST } from '../reducers/user';
import { SiTypescript, SiJavascript } from 'react-icons/si';
import { GrReactjs } from 'react-icons/gr';
import { RiComputerFill , RiErrorWarningLine} from 'react-icons/ri'
import { FiDatabase } from 'react-icons/fi';
import {AiOutlineHtml5} from 'react-icons/ai';
import {TiFlowSwitch} from 'react-icons/ti';
import { MailOutlined, GithubOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import { Footer, Header } from 'antd/lib/layout/layout';
import Router from 'next/router';
const { Search } = Input;
const { Meta } = Card;
const MyCard = styled(Card)`
    width : 300;
`;

const MainTitle = styled.a`
    font-size: 45px;
    padding-left: 25px;
    padding-bottom: 15px;   
    margin-top: 15px;
    text-align : center;
`

const TagWrapper = styled.div`
    text-align : center;
`;

const SearchWrapper = styled.div`
    width : 80%;
    margin : auto;
    margin-top: 25px;
    margin-bottom: 25px;
`;

const Taged = styled(Tag)`
    margin-bottom : 10px;
    
`;

const RowWrapper = styled(Row)`
    border-top : 0.1px solid #f0f0f0;
`;

const ButtonWrapper = styled(Button)`
    border : none;
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
        }
        setResponsiveness();
        window.addEventListener('resize', () => setResponsiveness());
    }, [])

    const onSearch = useCallback((value) => {
        location.href = `/SearchPost/${value}`;
    }, [])

    const toggleCollapsed = useCallback(() => {
        if(!collapsed){
            if(mobileSearch){
                setMobileSearch(false);
            }
        }
        setCollapsed(!collapsed);
    }, [collapsed,mobileSearch]);

    const onClickSearchMenu = useCallback(() => {
        if(!mobileSearch){
            if(collapsed){
                setCollapsed(false);
            }
        }
        setMobileSearch(!mobileSearch);
    }, [mobileSearch,collapsed]);

    return (
        <div>
            <div style={{ textAlign: "center", borderBottom: "3px solid #f0f0f0;", paddingBottom: "15px" }}>
                <div style={{ textAlign: "right" }}>v0.2.1</div>
                {mobileview && <Link href="/"><a><img style = {{width:"50%"}} src = "/Original on Transparent.png"/></a></Link>}
                {!mobileview && <Link href="/"><a><img style = {{width:"20%"}} src = "/Original on Transparent.png"/></a></Link>}
            </div>
            <Menu mode="horizontal">
                {mobileview && <Menu.Item>
                    <Button onClick={toggleCollapsed} style={{ marginBottom: 16, border: "none" }}>
                        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
                    </Button>
                </Menu.Item>}

                {!mobileview &&
                    <Menu.Item>
                        <Link href="/"><a>Home</a></Link>
                    </Menu.Item>
                }
                {me
                    ? null
                    :
                    <Menu.Item>
                        <Link href="/login"><a>로그인</a></Link>
                    </Menu.Item>}
                {!me && <Menu.Item><Link href="/signup"><a>회원가입</a></Link></Menu.Item>}
                <Menu.Item>
                    <Link href="/profile"><a>프로필</a></Link>
                </Menu.Item>    
                {me && me.email === "neostgeart@gmail.com" && <Menu.Item>
                    <Link href="/Write"><a>글쓰기</a></Link>
                </Menu.Item>}
                {mobileview && <Menu.Item onClick={onClickSearchMenu}>게시글 검색</Menu.Item>}
            </Menu>
            <RowWrapper>
                <Col xs={24} sm={6} md={5}> {/* 24등분 xs 모바일 md 데스크탑*/}
                    {me && !mobileview &&
                        <div stlye={{ textAlign: "center" }}>
                            <Card actions={[
                                <ButtonWrapper onClick={onLogout} loading={logOutLoading}>로그아웃</ButtonWrapper>,
                                <ButtonWrapper href="/changeNickname" >닉네임변경</ButtonWrapper>
                            ]}>
                                <Global />
                                <Meta avatar={<Avatar style={{ backgroundColor: me.color }} size={64}>{me.nickname[0]}</Avatar>} title={`환영합니다! ${me.nickname}님`} />
                            </Card>
                        </div>
                    }

                    {me && mobileview && collapsed &&
                        <div stlye={{ textAlign: "center" }}>
                            <Card actions={[
                                <ButtonWrapper onClick={onLogout} loading={logOutLoading}>로그아웃</ButtonWrapper>,
                                <ButtonWrapper href="/changeNickname" >닉네임변경</ButtonWrapper>
                            ]}>
                                <Global />
                                <Meta avatar={<Avatar style={{ backgroundColor: me.color }} size={64}>{me.nickname[0]}</Avatar>} title={`환영합니다! ${me.nickname}님`} />
                            </Card>
                        </div>
                    }

                    {!mobileview &&
                        <SearchWrapper>
                            <Search placeholder="게시글 검색" onSearch={onSearch} enterButton />
                        </SearchWrapper>
                    }

                    {mobileview && mobileSearch &&
                        <SearchWrapper>
                            <Search placeholder="게시글 검색" onSearch={onSearch} enterButton />
                        </SearchWrapper>
                    }

                    {!mobileview &&
                        <Menu style={{ width: "256", borderRight: "none" }} mode="inline" >
                            <Menu.Item key="1">
                                <a href="/category/JavaScript"><SiJavascript style={{ color: "gold", marginRight: "15px",verticalAlign: "middle" }} />JavaScript</a>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <a href="/category/React"><GrReactjs style={{ color: "dodgerblue", marginRight: "15px",verticalAlign: "middle" }} />React</a>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <a href="/category/TypeScript"><SiTypescript style={{ color: "dodgerblue", marginRight: "15px",verticalAlign: "middle" }} />TypeScript</a>
                            </Menu.Item>
                            <Menu.Item key="4">
                                <a href="/category/OperatingSystem"><RiComputerFill style={{ color: "forestgreen", marginRight: "15px",verticalAlign: "middle" }} />OperatingSystem</a>
                            </Menu.Item>
                            <Menu.Item key="5">
                                <a href="/category/DataStructure"><FiDatabase style={{ color: "dodgerblue", marginRight: "15px",verticalAlign: "middle" }} />DataStructure</a>
                            </Menu.Item>
                            <Menu.Item key="6">
                                <a href="/category/Algorithm"><TiFlowSwitch style={{ color: "lightpink", marginRight: "15px",verticalAlign: "middle" }} />Algorithm</a>
                            </Menu.Item>
                            <Menu.Item key="7">
                                <a href="/category/HTML-CSS"><AiOutlineHtml5 style={{ color: "orangered", marginRight: "15px",verticalAlign: "middle" }} />HTML-CSS</a>
                            </Menu.Item>
                            <Menu.Item key="8">
                                <a href="/category/Error"><RiErrorWarningLine style={{ color: "red", marginRight: "15px",verticalAlign: "middle" }} />Error</a>
                            </Menu.Item>
                        </Menu>}
                    {collapsed && mobileview &&
                        <Menu style={{ width: "256", borderRight: "none" }} mode="inline" >
                            <Menu.Item key="1">
                                <a href="/category/JavaScript"><SiJavascript style={{ color: "gold", marginRight: "15px",verticalAlign: "middle" }} />JavaScript</a>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <a href="/category/React"><GrReactjs style={{ color: "dodgerblue", marginRight: "15px" ,verticalAlign: "middle"}} />React</a>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <a href="/category/TypeScript"><SiTypescript style={{ color: "dodgerblue", marginRight: "15px" ,verticalAlign: "middle"}} />TypeScript</a>
                            </Menu.Item>
                            <Menu.Item key="4">
                                <a href="/category/OperatingSystem"><RiComputerFill style={{ color: "forestgreen", marginRight: "15px",verticalAlign: "middle" }} />OperatingSystem</a>
                            </Menu.Item>
                            <Menu.Item key="5">
                                <a href="/category/DataStructure"><FiDatabase style={{ color: "dodgerblue", marginRight: "15px",verticalAlign: "middle" }} />DataStructure</a>
                            </Menu.Item>
                            <Menu.Item key="6">
                                <a href="/category/Algorithm"><TiFlowSwitch style={{ color: "lightpink", marginRight: "15px" ,verticalAlign: "middle"}} />Algorithm</a>
                            </Menu.Item>
                            <Menu.Item key="7">
                                <a href="/category/HTML-CSS"><AiOutlineHtml5 style={{ color: "orangered", marginRight: "15px" ,verticalAlign: "middle"}} />HTML-CSS</a>
                            </Menu.Item>
                            <Menu.Item key="8">
                                <a href="/category/Error"><RiErrorWarningLine style={{ color: "red", marginRight: "15px",verticalAlign: "middle" }} />Error</a>
                            </Menu.Item>
                        </Menu>}

                </Col>
                <Col xs={24} sm={18} md={13} style={{ borderLeft: "0.1px solid #f0f0f0", borderRight: "0.1px solid #f0f0f0", height: "auto", minHeight: "881px" }}>
                    {children}
                    {mobileview && <div>
                        <div style={{ textAlign: 'center', fontSize: "16px", marginTop: "15px" }}>
                            <MailOutlined /> <div style={{ display: "inline-block" }}>neostgeart@gmail.com</div>
                        </div>
                        <div style={{ textAlign: 'center', fontSize: "16px", marginTop: "15px" ,marginBottom : "15px"}}>
                            <GithubOutlined /> <a href="https://github.com/BY-juun">https://github.com/BY-juun</a>
                        </div>
                    </div>}
                </Col>
                <Col xs={0} sm={0} md={6}>
                    <Divider orientation="center">Tag</Divider>
                    <TagWrapper style={{ textAlign: "center" }}>
                        <div>
                            <Taged color="#f50">JavaScript</Taged>
                            <Taged color="purple">JS</Taged>
                        </div>
                        <div>
                            <Taged color="#2db7f5">React</Taged>
                            <Taged color="default">React Hooks</Taged>
                        </div>
                        <div>
                            <Taged color="magenta">자료구조</Taged>
                            <Taged color="red">DataStructure</Taged>
                            <Taged color="#87d068">자구</Taged>
                        </div>
                        <div>
                            <Taged color="#87d068">TypeScript</Taged>
                            <Taged color="geekblue">TS</Taged>
                        </div>
                        <div>
                            <Taged color="default">Next JS</Taged>
                        </div>

                        <Taged color="lime">운영체제</Taged>
                        <Taged color="green">OperatingSystem</Taged>
                        <Taged color="cyan">OS</Taged>
                        <Taged color="#108ee9">...</Taged>
                    </TagWrapper>
                    <div style={{ textAlign: 'center', fontSize: "16px", marginTop: "15px" }}>
                        <MailOutlined /> <div style={{ display: "inline-block" }}>neostgeart@gmail.com</div>
                    </div>
                    <div style={{ textAlign: 'center', fontSize: "16px", marginTop: "15px" }}>
                        <GithubOutlined /> <a href="https://github.com/BY-juun">https://github.com/BY-juun</a>
                    </div>
                </Col>
            </RowWrapper>
            <Footer style={{ textAlign: 'center', background: "lightsteelblue" }}>ByJuun.com @2021 Created by By_Juun</Footer>
        </div>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppLayout;