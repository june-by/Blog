/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-no-comment-textnodes */
import { MailOutlined, GithubOutlined} from '@ant-design/icons'


const Tags = () => {
  return (
    <>
      <div style={{ textAlign: "center", fontSize: "16px", marginTop: "50px" }}>
        <MailOutlined />{" "}
        <div style={{ display: "inline-block" }}>neostgeart@gmail.com</div>
      </div>
      <div style={{ textAlign: "center", fontSize: "16px", marginTop: "15px" }}>
        <GithubOutlined />{" "}
        <a href="https://github.com/BY-juun">https://github.com/BY-juun</a>
      </div>
    </>
  );
};
export default Tags;
