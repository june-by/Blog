import { SiTypescript, SiJavascript } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { RiComputerFill, RiErrorWarningLine } from "react-icons/ri";
import { FiDatabase } from "react-icons/fi";
import { AiOutlineHtml5 } from "react-icons/ai";
import { TiFlowSwitch } from "react-icons/ti";
import { List, Avatar, Space } from "antd";
import { FaNodeJs } from 'react-icons/fa';
import { IoSchoolOutline } from 'react-icons/io5';

const ListComponent = ({ Posts }) => {
  const listData = [];
  const cardTitle = [
    <SiJavascript
      size="24"
      style={{ color: "gold", verticalAlign: "middle" }}
    />,
    <GrReactjs
      size="24"
      style={{ color: "dodgerblue", verticalAlign: "middle" }}
    />,
    <SiTypescript
      size="24"
      style={{ color: "dodgerblue", verticalAlign: "middle" }}
    />,
    <RiComputerFill
      size="24"
      style={{ color: "forestgreen", verticalAlign: "middle" }}
    />,
    <FiDatabase
      size="24"
      style={{ color: "dodgerblue", verticalAlign: "middle" }}
    />,
    <AiOutlineHtml5
      size="24"
      style={{ color: "orangered", verticalAlign: "middle" }}
    />,
    <RiErrorWarningLine
      size="24"
      style={{ color: "red", verticalAlign: "middle" }}
    />,
    <TiFlowSwitch
      size="24"
      style={{ color: "lightpink", verticalAlign: "middle" }}
    />,
    <FaNodeJs size="24" style={{ color: "green", verticalAlign: "middle" }} />,
    <IoSchoolOutline
      size="24"
      style={{ color: "steelblue", verticalAlign: "middle" }}
    />,
    <IoSchoolOutline
      size="24"
      style={{ color: "mediumseagreen", verticalAlign: "middle" }}
    />,
  ];
  for (let post of Posts) {
    let avatar;
    if (post.category) {
      switch (post.category) {
        case "JavaScript":
          avatar = cardTitle[0];
          break;
        case "React":
          avatar = cardTitle[1];
          break;
        case "TypeScript":
          avatar = cardTitle[2];
          break;
        case "OperatingSystem":
          avatar = cardTitle[3];
          break;
        case "DataStructure":
          avatar = cardTitle[4];
          break;
        case "HTML-CSS":
          avatar = cardTitle[5];
          break;
        case "Error":
          avatar = cardTitle[6];
          break;
        case "Algorithm":
          avatar = cardTitle[7];
          break;
        case "NodeJs":
          avatar = cardTitle[8];
          break;
        case "IntensiveEducation1":
          avatar = cardTitle[9];
          break;
        case "IntensiveEducation2":
          avatar = cardTitle[10];
          break;
        default:
          break;
      }
    }

    listData.push({
      href: `/post/${post.id}`,
      title: post.title,
      avatar: avatar,
      createdAt: post.createdAt.substr(0, 10),
      category: post.category,
    });
  }
  return (
    <List
      itemLayout="horizontal"
      size="default"
      dataSource={listData}
      renderItem={(item) => (
        <List.Item
          key={item.title}
          actions={[
            <a key="list-loadmore-more" href={item.href}>
              more
            </a>,
          ]}
          style={{ paddingLeft: "25px", paddingRight: "25px" }}
        >
          <List.Item.Meta
            avatar={<Avatar src={item.avatar} />}
            title={<a href={item.href}>{item.title}</a>}
            description={item.category}
          />
          <div>{item.createdAt}</div>
        </List.Item>
      )}
    ></List>
  );
};

export default ListComponent;
