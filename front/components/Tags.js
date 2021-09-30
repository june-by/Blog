/* eslint-disable react/react-in-jsx-scope */
import {  Tag, Divider} from 'antd';
import styled from "styled-components";
import { SiTypescript, SiJavascript, SiNextDotJs, SiRedux } from 'react-icons/si';
import { GrReactjs } from 'react-icons/gr';
import {  RiErrorWarningLine,RiComputerFill } from 'react-icons/ri'
import { FiDatabase, FiServer } from 'react-icons/fi';
import { AiOutlineHtml5, AiFillCar } from 'react-icons/ai';
import { TiFlowSwitch } from 'react-icons/ti';
import { GiVendingMachine } from 'react-icons/gi';
import { DiCss3 } from 'react-icons/di';
import { MailOutlined, GithubOutlined} from '@ant-design/icons'



const TagWrapper = styled.div`
    text-align : center;
`;

const Taged = styled(Tag)`
    margin-bottom : 10px;
    
`;

const Tags = () => {
  return (
    <>
      <Divider orientation="center">Tag</Divider>
      <TagWrapper style={{ textAlign: "center" }}>
        <div>
          <Taged
            icon={<SiJavascript style={{ verticalAlign: "middle" }} />}
            color="yellow"
          >
            {" "}
            JavaScript
          </Taged>
          <Taged
            icon={<SiJavascript style={{ verticalAlign: "middle" }} />}
            color="orange"
          >
            {" "}
            JS
          </Taged>
        </div>
        <div>
          <Taged
            icon={<AiOutlineHtml5 style={{ verticalAlign: "middle" }} />}
            color="#f50"
          >
            {" "}
            HTML
          </Taged>
          <Taged
            icon={<DiCss3 style={{ verticalAlign: "middle" }} />}
            color="purple"
          >
            {" "}
            CSS
          </Taged>
        </div>
        <div>
          <Taged
            color="#2db7f5"
            icon={<GrReactjs style={{ verticalAlign: "middle" }} />}
          >
            {" "}
            React
          </Taged>
          <Taged
            color="default"
            icon={<GrReactjs style={{ verticalAlign: "middle" }} />}
          >
            {" "}
            React Hooks
          </Taged>
        </div>
        <div>
          <Taged
            color="violet"
            icon={<SiRedux style={{ verticalAlign: "middle" }} />}
          >
            {" "}
            Redux
          </Taged>
          <Taged
            color="blue"
            icon={<SiRedux style={{ verticalAlign: "middle" }} />}
          >
            {" "}
            Redux Saga
          </Taged>
        </div>
        <div>
          <Taged
            icon={<FiDatabase style={{ verticalAlign: "middle" }} />}
            color="magenta"
          >
            {" "}
            자료구조
          </Taged>
          <Taged
            icon={<FiDatabase style={{ verticalAlign: "middle" }} />}
            color="red"
          >
            {" "}
            DataStructure
          </Taged>
          <Taged
            icon={<FiDatabase style={{ verticalAlign: "middle" }} />}
            color="#87d068"
          >
            {" "}
            자구
          </Taged>
        </div>
        <div>
          <Taged
            icon={<SiTypescript style={{ verticalAlign: "middle" }} />}
            color="#87d068"
          >
            {" "}
            TypeScript
          </Taged>
          <Taged
            icon={<SiTypescript style={{ verticalAlign: "middle" }} />}
            color="geekblue"
          >
            {" "}
            TS
          </Taged>
        </div>
        <div>
          <Taged
            icon={<SiNextDotJs style={{ verticalAlign: "middle" }} />}
            color="default"
          >
            {" "}
            Next JS
          </Taged>
          <Taged
            icon={<FiServer style={{ verticalAlign: "middle" }} />}
            color="default"
          >
            {" "}
            ServersideRendering
          </Taged>
        </div>
        <div>
          <Taged
            icon={<RiComputerFill style={{ verticalAlign: "middle" }} />}
            color="lime"
          >
            {" "}
            운영체제
          </Taged>
          <Taged
            icon={<RiComputerFill style={{ verticalAlign: "middle" }} />}
            color="green"
          >
            {" "}
            OperatingSystem
          </Taged>
          <Taged
            icon={<RiComputerFill style={{ verticalAlign: "middle" }} />}
            color="cyan"
          >
            {" "}
            OS
          </Taged>
        </div>
        <div>
          <Taged
            icon={<TiFlowSwitch style={{ verticalAlign: "middle" }} />}
            color="pink"
          >
            {" "}
            Algorithm
          </Taged>
          <Taged
            icon={<TiFlowSwitch style={{ verticalAlign: "middle" }} />}
            color="violet"
          >
            {" "}
            알고리즘
          </Taged>
        </div>
        <div>
          <Taged
            icon={<RiErrorWarningLine style={{ verticalAlign: "middle" }} />}
            color="red"
          >
            {" "}
            Error
          </Taged>
          <Taged
            icon={<RiErrorWarningLine style={{ verticalAlign: "middle" }} />}
            color="palevioletred"
          >
            {" "}
            에러모음
          </Taged>
        </div>
        <div>
          <Taged
            icon={<AiFillCar style={{ verticalAlign: "middle" }} />}
            color="lightblue"
          >
            {" "}
            자동차
          </Taged>
          <Taged
            icon={<GiVendingMachine style={{ verticalAlign: "middle" }} />}
            color="default"
          >
            {" "}
            ECU
          </Taged>
        </div>
      </TagWrapper>
      <div style={{ textAlign: "center", fontSize: "16px", marginTop: "15px" }}>
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
