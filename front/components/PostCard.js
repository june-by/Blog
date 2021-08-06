import { Card, Tag } from 'antd';
import styled from 'styled-components';

//전체 post 를 가져와서 띄어주는 글 (최신순으로)

const CardWrapper = styled(Card)`
    width : 90%;
    border : 1px solid lightsteelblue;
    border-radius : 30px;
    margin : auto;
    margin-top : 10px;
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

    return (
        <CardWrapper title={post.title}
            extra={<><Tag color="geekblue"><div>Category : <a href={`category/${category}`}>{category}</a></div></Tag>
                <div style={{ display: "inline-block", marginRight: "5px", borderTop: "0" }}>{post.createdAt.substr(0, 10)}</div>
                <a style={{ fontSize: "19px", color: "blue" }} href={`/post/${id}`} >More</a></>} >
            {hashTag && hashTagSplit.map((value, index) => <Tag color="blue"><div>{value[0]}{value.slice(1)}</div></Tag>)}
        </CardWrapper>
    );
}

export default PostCard;