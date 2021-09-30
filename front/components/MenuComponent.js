/* eslint-disable react/react-in-jsx-scope */
import { Menu} from 'antd';
import { SiTypescript, SiJavascript } from 'react-icons/si';
import { GrReactjs } from 'react-icons/gr';
import { FaNodeJs } from 'react-icons/fa';
import { IoSchoolOutline } from 'react-icons/io5';
import {  RiErrorWarningLine,RiComputerFill } from 'react-icons/ri'
import { FiDatabase } from 'react-icons/fi';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { TiFlowSwitch } from 'react-icons/ti';

const MenuComponent = () => {
  return (
    <Menu style={{ width: "256", borderRight: "none" }} mode="inline">
      <Menu.Item key="1">
        <a href="/category/JavaScript">
          <SiJavascript
            style={{
              color: "gold",
              marginRight: "15px",
              verticalAlign: "middle",
            }}
          />
          JavaScript
        </a>
      </Menu.Item>
      <Menu.Item key="2">
        <a href="/category/React">
          <GrReactjs
            style={{
              color: "dodgerblue",
              marginRight: "15px",
              verticalAlign: "middle",
            }}
          />
          React
        </a>
      </Menu.Item>
      <Menu.Item key="3">
        <a href="/category/NodeJs">
          <FaNodeJs
            style={{
              color: "green",
              marginRight: "15px",
              verticalAlign: "middle",
            }}
          />
          NodeJs
        </a>
      </Menu.Item>
      <Menu.Item key="4">
        <a href="/category/TypeScript">
          <SiTypescript
            style={{
              color: "dodgerblue",
              marginRight: "15px",
              verticalAlign: "middle",
            }}
          />
          TypeScript
        </a>
      </Menu.Item>
      <Menu.Item key="5">
        <a href="/category/OperatingSystem">
          <RiComputerFill
            style={{
              color: "forestgreen",
              marginRight: "15px",
              verticalAlign: "middle",
            }}
          />
          OperatingSystem
        </a>
      </Menu.Item>
      <Menu.Item key="6">
        <a href="/category/DataStructure">
          <FiDatabase
            style={{
              color: "dodgerblue",
              marginRight: "15px",
              verticalAlign: "middle",
            }}
          />
          DataStructure
        </a>
      </Menu.Item>
      <Menu.Item key="7">
        <a href="/category/Algorithm">
          <TiFlowSwitch
            style={{
              color: "lightpink",
              marginRight: "15px",
              verticalAlign: "middle",
            }}
          />
          Algorithm
        </a>
      </Menu.Item>
      <Menu.Item key="8">
        <a href="/category/HTML-CSS">
          <AiOutlineHtml5
            style={{
              color: "orangered",
              marginRight: "15px",
              verticalAlign: "middle",
            }}
          />
          HTML-CSS
        </a>
      </Menu.Item>
      <Menu.Item key="9">
        <a href="/category/Error">
          <RiErrorWarningLine
            style={{
              color: "red",
              marginRight: "15px",
              verticalAlign: "middle",
            }}
          />
          Error
        </a>
      </Menu.Item>
      <Menu.Item key="10">
        <a href="/category/IntensiveEducation1">
          <IoSchoolOutline
            style={{
              color: "steelblue",
              marginRight: "15px",
              verticalAlign: "middle",
            }}
          />
          집중교육1
        </a>
      </Menu.Item>
      <Menu.Item key="11">
        <a href="/category/IntensiveEducation2">
          <IoSchoolOutline
            style={{
              color: "mediumseagreen",
              marginRight: "15px",
              verticalAlign: "middle",
            }}
          />
          집중교육2
        </a>
      </Menu.Item>
    </Menu>
  );
};

export default MenuComponent;
