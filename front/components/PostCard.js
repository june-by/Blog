import {Card} from 'antd';
//전체 post 를 가져와서 띄어주는 글 (최신순으로)
const PostCard = ({ post }) => {
    const {hashTag,category} = post;
    return (
        <Card title={post.title}  extra={<a href="#">More</a>} >
            {category && <div>Category : <a href = {`post/${category}`}>{category}</a></div> } 
            {hashTag && hashTag.map((value,index) => <p style = {{display : "inline"}}>  <p style = {{display : "inline" ,color : "blue"}}> #</p> {value}   </p>)}
        </Card>
    );
}

export default PostCard;