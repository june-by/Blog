import {Card} from 'antd';
import { useCallback } from 'react';

//전체 post 를 가져와서 띄어주는 글 (최신순으로)
const PostCard = ({ post }) => {
    const {hashTag,category,id} = post;
    return (
        <Card title={post.title}  extra={<a href={`/post/${id}`} >More</a>} >
            {category && <div>Category : <a href = {`category/${category}`}>{category}</a></div> } 
            {hashTag && hashTag.map((value,index) => <p style = {{display : "inline"}}>  <p style = {{display : "inline" ,color : "blue"}}> #</p> {value}   </p>)}
        </Card>
    );
}

export default PostCard;