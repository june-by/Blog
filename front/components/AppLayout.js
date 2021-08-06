import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Row, Col, Card, Calendar, Tag, Divider, Button } from 'antd';
import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux';
import { LOG_OUT_REQUEST } from '../reducers/user';
import { RiKakaoTalkFill, RiFacebookBoxFill, RiGoogleFill } from 'react-icons/ri'
import {MailOutlined, GithubOutlined} from '@ant-design/icons'

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

const Taged = styled(Tag)`
    margin-bottom : 10px;
`;

const Title = styled.img`

`;

const AppLayout = ({ children }) => {
    const { me, logOutLoading} = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const onLogout = useCallback(() => {
        dispatch({
            type: LOG_OUT_REQUEST,
        });
    }, []);


    return (
        <div>
            
            <div style={{ textAlign: "center", borderBottom: "0.7px solid gray" ,paddingBottom : "15px"}}>
                <div style = {{textAlign : "right"}}>v0.2.1</div>
                <Link href="/"><a><Title src = 'B.jpeg' width = "50px" height = "70px"/></a></Link>
                <Link href="/"><a><Title src = 'Y.jpeg' width = "70px" height = "70px" style = {{marginLeft : "-20px"}}/></a></Link>
            </div>
            
            <Menu mode="horizontal">
                <Menu.Item>
                    <Link href="/"><a>Home</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/profile"><a>프로필</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/introduction"><a>블로그소개</a></Link>
                </Menu.Item>
                {me
                    ? null
                    :
                    <Menu.Item>
                        <Link href="/login"><a>로그인</a></Link>
                    </Menu.Item>}

                <Menu.Item>
                    <Link href = "http://localhost:3085/user/kakao"><RiKakaoTalkFill /></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href = "http://localhost:3085/user/facebook"><RiFacebookBoxFill /></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/login"><RiGoogleFill /></Link>
                </Menu.Item>
                {!me && <Menu.Item><Link href="/signup"><a>회원가입</a></Link></Menu.Item>}
                {me && me.email === "neostgeart@gmail.com" && <Menu.Item>
                    <Link href="/Write"><a>글쓰기</a></Link>
                </Menu.Item>}
            </Menu>
            <Row style = {{borderTop : "0.1px solid #f0f0f0"}}>
                <Col xs={24} sm={6} md={5}> {/* 24등분 xs 모바일 md 데스크탑*/}
                    {me &&
                        <div>
                            <Card><Card.Meta title={`환영합니다! ${me.nickname}님`} />
                                <div style={{ marginTop: "15px" }}>
                                    <Button onClick={onLogout} loading={logOutLoading}>로그아웃</Button>
                                    <Button style={{ marginLeft: "10px" }} href = "/changeNickname" >닉네임변경</Button>
                                </div>
                            </Card>
                        </div>
                    }
                    <Menu style={{ width: "256", borderRight : "none" }} mode="inline" >
                        <Menu.Item key="1">
                            <a href="/category/JavaScript">JavaScript</a>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <a href="/category/React">React</a>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <a href="/category/TypeScript">TypeScript</a>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <a href="/category/OperatingSystem">OperatingSystem</a>
                        </Menu.Item>
                        <Menu.Item key="5">
                            <a href="/category/DataBase">DataBase</a>
                        </Menu.Item>
                        <Menu.Item key="6">
                            <a href="/category/Browser">Browser</a>
                        </Menu.Item>
                    </Menu>
                </Col>
                <Col xs={24} sm={18} md={13} style = {{borderLeft : "0.1px solid #f0f0f0", borderRight : "0.1px solid #f0f0f0", height : "auto" , minHeight : "881px"}}>
                    {children}
                </Col>
                <Col xs={0} sm={0} md={6}>
                    <Divider orientation="center">Tag</Divider>
                    <TagWrapper style = {{textAlign : "center"}}>
                        <Taged color="#f50">JavaScript</Taged>
                        <Taged color="#2db7f5">React</Taged>
                        <Taged color="#87d068">TypeScript</Taged>
                        <Taged color="magenta">데이터베이스</Taged>
                        <Taged color="red">DataBase</Taged>
                        <Taged color="#87d068">DB</Taged>
                        <Taged color="lime">운영체제</Taged>
                        <Taged color="green">OperatingSystem</Taged>
                        <Taged color="cyan">OS</Taged>
                        <Taged color="#108ee9">...</Taged>
                    </TagWrapper>
                    <div style = {{textAlign : 'center', fontSize : "16px" ,marginTop : "15px"}}>
                    <MailOutlined /> <div style = {{display : "inline-block"}}>neostgeart@gmail.com</div>
                    </div>
                    <div  style = {{textAlign : 'center', fontSize : "16px", marginTop : "15px"}}>
                    <GithubOutlined /> <a href="https://github.com/BY-juun">https://github.com/BY-juun</a>
                    </div>
                </Col>
            </Row>

        </div>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppLayout;