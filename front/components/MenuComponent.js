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
import {GiWireframeGlobe} from 'react-icons/gi';
import Link from 'next/link'

const MenuComponent = () => {
  return (
    <Menu style={{ width: "256", borderRight: "none" }} mode="inline">
      <Menu.Item key="1">
        <Link href="/category/JavaScript">
        <a>
          <SiJavascript
            style={{
              color: "gold",
              marginRight: "15px",
              verticalAlign: "middle",
            }}
          />
          JavaScript
        </a>
        </Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link href="/category/React">
        <a>
          <GrReactjs
            style={{
              color: "dodgerblue",
              marginRight: "15px",
              verticalAlign: "middle",
            }}
          />
          React
        </a>
        </Link>
      </Menu.Item>
      <Menu.Item key="11">
        <Link href="/category/web">
        <a>
          <GiWireframeGlobe
            style={{
              color: "dodgerblue",
              marginRight: "15px",
              verticalAlign: "middle",
            }}
          />
          집중교육2
        </a>
        </Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link href="/category/NodeJs">
        <a>
          <FaNodeJs
            style={{
              color: "green",
              marginRight: "15px",
              verticalAlign: "middle",
            }}
          />
          NodeJs
        </a>
        </Link>
      </Menu.Item>
      <Menu.Item key="4">
        <Link href="/category/TypeScript">
        <a>
          <SiTypescript
            style={{
              color: "dodgerblue",
              marginRight: "15px",
              verticalAlign: "middle",
            }}
          />
          TypeScript
        </a>
        </Link>
      </Menu.Item>
      <Menu.Item key="5">
        <Link href="/category/OperatingSystem">
        <a>
          <RiComputerFill
            style={{
              color: "forestgreen",
              marginRight: "15px",
              verticalAlign: "middle",
            }}
          />
          OperatingSystem
        </a>
        </Link>
      </Menu.Item>
      <Menu.Item key="6">
        <Link href="/category/DataStructure">
        <a>
          <FiDatabase
            style={{
              color: "dodgerblue",
              marginRight: "15px",
              verticalAlign: "middle",
            }}
          />
          DataStructure
        </a>
        </Link>
      </Menu.Item>
      <Menu.Item key="7">
        <Link href="/category/Algorithm">
        <a>
          <TiFlowSwitch
            style={{
              color: "lightpink",
              marginRight: "15px",
              verticalAlign: "middle",
            }}
          />
          Algorithm
        </a>
        </Link>
      </Menu.Item>
      <Menu.Item key="8">
        <Link href="/category/HTML-CSS">
        <a>
          <AiOutlineHtml5
            style={{
              color: "orangered",
              marginRight: "15px",
              verticalAlign: "middle",
            }}
          />
          HTML-CSS
        </a>
        </Link>
      </Menu.Item>
      <Menu.Item key="9">
        <Link  href="/category/Error">
        <a>
          <RiErrorWarningLine
            style={{
              color: "red",
              marginRight: "15px",
              verticalAlign: "middle",
            }}
          />
          Error
        </a>
        </Link>
      </Menu.Item>
      <Menu.Item key="10">
        <Link href="/category/IntensiveEducation1"> 
        <a>
          <IoSchoolOutline
            style={{
              color: "steelblue",
              marginRight: "15px",
              verticalAlign: "middle",
            }}
          />
          집중교육1
        </a>
        </Link>
      </Menu.Item>

    </Menu>
  );
};

export default MenuComponent;
