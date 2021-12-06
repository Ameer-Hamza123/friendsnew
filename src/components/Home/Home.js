import { Row, Col,  } from "antd";
import { HomeOutlined, InfoCircleOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import { useState } from "react";
import '../styles/styles.scss';



const Home = () => { 
  return (
    <>
      <Row className="mt-2">
          <Col span={4}>
          <img src="https://static.remove.bg/remove-bg-web/126e8851f6e88bf644890fafdf1b0d82aff0629e/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg" alt="Profile" className="profileimage" />
          </Col>
          <Col span={8}>
            <div className="text-left">
                <h1>Hamza</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia minus quibusdam est repudiandae hic sunt accusamus reprehenderit.</p>
            </div>
          </Col>
          <Col span={12}>
          
          </Col>
      </Row>
    </>
  );
};
export default Home;
