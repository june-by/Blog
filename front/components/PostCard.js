import {Card} from 'antd';
//전체 post 를 가져와서 띄어주는 글 (최신순으로)
const PostCard = ({ post }) => {
    const {hashTag} = post;
    return (
        <Card title={post.Title} extra={<a href="#">More</a>} >
            {hashTag && hashTag.map((value,index) => <p style = {{display : "inline"}}>  <p style = {{display : "inline" ,color : "blue"}}> #</p> {value}   </p>)}
        </Card>
    );
}

export default PostCard;