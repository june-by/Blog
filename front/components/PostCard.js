import {Card} from 'antd';
import { useCallback } from 'react';
import ReactHtmlParser from 'html-react-parser'

//전체 post 를 가져와서 띄어주는 글 (최신순으로)
const PostCard = ({ post }) => {
    const {hashTag,category,id} = post;
    const hashTagSplit = [];
    if(hashTag)
    {
        
        hashTag.split(/(#[^\s#]+)/g).map((v) => {
            if (v.match(/(#[^\s#]+)/)) {
                hashTagSplit.push(v);
            }
        })
        
    }
    
    return (
        <Card title={post.title}  extra={<><div style = {{display:"inline-block", marginRight : "5px" , borderTop : "0"}}>작성일자 : {post.createdAt.substr(0,10)}</div>
        <a style = {{fontSize : "19px"}} href={`/post/${id}`} >More</a></>} >
            {category && <div>Category : <a href = {`category/${category}`}>{category}</a></div> } 
            {hashTag && hashTagSplit.map((value,index) => <p style = {{display : "inline", marginRight : "5px"}}>  
            <p style = {{display : "inline" ,color : "blue"}}> {value[0]} </p>  {value.slice(1)}  </p>)}
        </Card>
    );
}

export default PostCard;