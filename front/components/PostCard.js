import {Card} from 'antd';
import { useCallback } from 'react';
import ReactHtmlParser from 'html-react-parser'

//전체 post 를 가져와서 띄어주는 글 (최신순으로)
const PostCard = ({ post }) => {
    const {hashTag,category,id,content} = post;
    return (
        <Card title={post.title}  extra={<a href={`/post/${id}`} >More</a>} >
            {category && <div>Category : <a href = {`category/${category}`}>{category}</a></div> } 
            {hashTag && hashTag.map((value,index) => <p style = {{display : "inline"}}>  <p style = {{display : "inline" ,color : "blue"}}> #</p> {value}   </p>)}
            {content && <div>{ReactHtmlParser(content)}</div>}
        </Card>
    );
}

export default PostCard;