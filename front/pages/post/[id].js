import AppLayout from "../../components/AppLayout";
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { LOAD_POST_REQUEST } from "../../reducers/post";

//More button을 누르면, 해당 글의 id를 가지고 Post Component로 온다
//그렇다면 나는 서버로 해당 id에 해당하는 글을 가지고 와서 이를 보여주면댐.
const Post = () => {
    const router = useRouter();
    const { id } = router.query;


    const { currentPost } = useSelector((state) => state.post);
    return (
        <AppLayout>
            {currentPost && <h1>{currentPost.title}</h1>}
            <p>This is the blog post content.</p>
        </AppLayout>
    )
};

export default Post;