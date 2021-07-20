import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Row, Col, Card } from 'antd';
import styled from "styled-components";
const { SubMenu } = Menu;

const MyCard = styled(Card)`
    width : 300;
`;

const MainTitle = styled.div`
    font-size: 45px;
    padding-left: 25px;
    padding-bottom: 15px;
    margin-top: 15px;
    border-bottom: 0.5px solid gray;
`

const AppLayout = ({ children }) => {
    return (
        <div>
            <MainTitle>By_juun Blog</MainTitle>
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
            </Menu>
            <Row gutter={8}>
                <Col xs={24} md={6}> {/* 24등분 xs 모바일 md 데스크탑*/}
                    <MyCard>
                        <p>오늘 방문자</p>
                        <p>총 방문자</p>
                    </MyCard>
                    <Menu mode="inline">
                        <SubMenu key="sub1" title="JavaScript">
                            <Menu.Item key="1">Option 1</Menu.Item>
                            <Menu.Item key="2">Option 2</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title="Nodejs">
                            <Menu.Item key="1">Option 1</Menu.Item>
                            <Menu.Item key="2">Option 2</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3" title="React">
                            <Menu.Item key="1">Option 1</Menu.Item>
                            <Menu.Item key="2">Option 2</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub4" title="운영체제">
                            <Menu.Item key="1">Option 1</Menu.Item>
                            <Menu.Item key="2">Option 2</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub5" title="데이터베이스">
                            <Menu.Item key="1">Option 1</Menu.Item>
                            <Menu.Item key="2">Option 2</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub6" title="TypeScript">
                            <Menu.Item key="1">Option 1</Menu.Item>
                            <Menu.Item key="2">Option 2</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub7" title="잡담">
                            <Menu.Item key="1">Option 1</Menu.Item>
                            <Menu.Item key="2">Option 2</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Col>
                <Col xs={24} md={18}>
                    {children}
                </Col>
            </Row>

        </div>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppLayout;