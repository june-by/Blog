import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Row, Col, Card, Calendar, Tag, Divider } from 'antd';
import styled from "styled-components";
import {useForm} from 'react-hook-form';
import {useSelector} from 'react-redux';

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
const AppLayout = ({ children }) => {
    return (
        <div>
            <div style = {{textAlign : "center" ,borderBottom : "0.7px solid gray"}}>
            <Link href = "/"><MainTitle>By_juun Blog</MainTitle></Link>
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
                <Menu.Item>
                    <Link href="/Write"><a>글쓰기</a></Link>
                </Menu.Item>
            </Menu>
            <Row gutter={8}>
                <Col xs={24} sm = {6} md={4}> {/* 24등분 xs 모바일 md 데스크탑*/}
                    <MyCard>
                        <p>오늘 방문자 10</p>
                        <p>총 방문자 1000</p>
                    </MyCard>
                    <Menu style = {{width : "256"}}  mode = "inline" >
                        <Menu.Item key="1">
                            <a href = "/category/JavaScript">JavaScript</a>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <a href = "/category/React">React</a>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <a href = "/category/TypeScript">TypeScript</a>
                        </Menu.Item>
                    </Menu>
                </Col>
                <Col xs={24} sm = {18} md={14}>
                    {children}
                </Col>
                <Col xs={0} sm = {0} md={6}>
                    <Calendar fullscreen={false} />
                    <Divider orientation="center">Tag</Divider>
                    <TagWrapper>
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
                </Col>
            </Row>

        </div>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppLayout;