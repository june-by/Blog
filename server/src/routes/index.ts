import postRouter from "./Post/postRouter";
import postsRouter from "./Posts/postsRouter";
import seriesRouter from "./Series/seriesRouter";
import snippetRouter from "./Snippet/snippetRouter";
import tagRouter from "./Tag/tagRouter";
import userRouter from "./User/userRouter";
import visitorRouter from "./Visitor/visitorRouter";

const ROUTER_LIST = [
  { url: "/post", router: postRouter },
  { url: "/posts", router: postsRouter },
  { url: "/user", router: userRouter },
  { url: "/visitor", router: visitorRouter },
  { url: "/tag", router: tagRouter },
  { url: "/series", router: seriesRouter },
  { url: "/snippet", router: snippetRouter },
];

export default ROUTER_LIST;
