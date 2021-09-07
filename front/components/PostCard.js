import { Card, Tag } from 'antd';
import styled from 'styled-components';
import { SiTypescript, SiJavascript } from 'react-icons/si';
import { GrReactjs } from 'react-icons/gr';
import { RiComputerFill, RiErrorWarningLine } from 'react-icons/ri'
import { FiDatabase } from 'react-icons/fi';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { TiFlowSwitch } from 'react-icons/ti';
import { FaNodeJs } from 'react-icons/fa';
import { IoSchoolOutline } from 'react-icons/io5';
//전체 post 를 가져와서 띄어주는 글 (최신순으로)

const CardWrapper = styled(Card)`
    width : 90%;
    border : 1px solid lightsteelblue;
    border-radius : 30px;
    margin : auto;
    margin-top : 10px;
`;

const StyledTag = styled(Tag)`
    margin-bottom : 5px;
`;
const PostCard = ({ post }) => {
    const { hashTag, category, id } = post;
    const hashTagSplit = [];
    if (hashTag) {

        hashTag.split(/(#[^\s#]+)/g).map((v) => {
            if (v.match(/(#[^\s#]+)/)) {
                hashTagSplit.push(v);
            }
        })

    }

    const cardTitle = [
        {
            title: (
                <>
                    <SiJavascript size="24" style={{ marginRight: "10px", color: "gold", verticalAlign: "middle" }} />{post.title}
                </>
            ),
        },
        {
            title: (
                <>
                    <GrReactjs size="24" style={{ marginRight: "10px", color: "dodgerblue", verticalAlign: "middle" }} />{post.title}
                </>
            ),
        },
        {
            title: (
                <>
                    <SiTypescript size="24" style={{ marginRight: "10px", color: "dodgerblue", verticalAlign: "middle" }} />{post.title}
                </>
            ),
        },
        {
            title: (
                <>
                    <RiComputerFill size="24" style={{ marginRight: "10px", color: "forestgreen", verticalAlign: "middle" }} />{post.title}
                </>
            ),
        },
        {
            title: (
                <>
                    <FiDatabase size="24" style={{ marginRight: "10px", color: "dodgerblue", verticalAlign: "middle" }} />{post.title}
                </>
            ),
        },
        {
            title: (
                <>
                    <AiOutlineHtml5 size="24" style={{ marginRight: "10px", color: "orangered", verticalAlign: "middle" }} />{post.title}
                </>
            ),
        },
        {
            title: (
                <>
                    <RiErrorWarningLine size="24" style={{ marginRight: "10px", color: "red", verticalAlign: "middle" }} />{post.title}
                </>
            ),
        },
        {
            title: (
                <>
                    <TiFlowSwitch size="24" style={{ marginRight: "10px", color: "lightpink", verticalAlign: "middle" }} />{post.title}
                </>
            ),
        },
        {
            title: (
                <>
                    <FaNodeJs size="24" style={{ marginRight: "10px", color: "green", verticalAlign: "middle" }} />{post.title}
                </>
            ),
        },
        {
            title: (
                <>
                    <IoSchoolOutline size="24" style={{ marginRight: "10px", color: "steelblue", verticalAlign: "middle" }} />{post.title}
                </>
            ),
        },
        {
            title: (
                <>
                    <IoSchoolOutline size="24" style={{ marginRight: "10px", color: "mediumseagreen", verticalAlign: "middle" }} />{post.title}
                </>
            ),
        }
    ];

    let titleLogo = post;
    if (category) {
        switch (category) {
            case "JavaScript":
                titleLogo = cardTitle[0];
                break;
            case "React":
                titleLogo = cardTitle[1];
                break;
            case "TypeScript":
                titleLogo = cardTitle[2];
                break;
            case "OperatingSystem":
                titleLogo = cardTitle[3];
                break;
            case "DataStructure":
                titleLogo = cardTitle[4];
                break;
            case "HTML-CSS":
                titleLogo = cardTitle[5];
                break;
            case "Error":
                titleLogo = cardTitle[6];
                break;
            case "Algorithm":
                titleLogo = cardTitle[7];
                break;
            case "NodeJs":
                titleLogo = cardTitle[8];
                break;
            case "IntensiveEducation1":
                titleLogo = cardTitle[9];
                break;
            case "IntensiveEducation2":
                titleLogo = cardTitle[10];
                break;
            default:
                break;
        }
    }



    return (
        <CardWrapper title={titleLogo.title}
            extra={<>
                <div style={{ display: "inline-block", marginRight: "5px", borderTop: "0" }}>{post.createdAt.substr(0, 10)}</div>
                <a style={{ fontSize: "19px", color: "steelblue" }} href={`/post/${id}`} >More</a></>} >
            <div style={{ marginBottom: "15px" }}><Tag color="geekblue"><div>Category : <a href={`category/${category}`}>{category}</a></div></Tag></div>
            {hashTag && hashTagSplit.map((value, index) => <StyledTag color="blue"><div>{value[0]}{value.slice(1)}</div></StyledTag>)}
        </CardWrapper>
    );
}

export default PostCard;