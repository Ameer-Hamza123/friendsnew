import logo from './logo.svg';
import './App.css';
import Routers from './components/Router/Router';
import {Row , Col,Button} from 'antd'
import { HomeOutlined, InfoCircleOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import { useState } from "react";
import { signOut } from "@firebase/auth";
import { useNavigate } from "react-router";
import { auth } from "./components/firebase/firebase";

function App() {
  const navigate = useNavigate();
  const name = JSON.parse(localStorage.getItem("username"));
  const logout = async () => {
    try {
      await signOut(auth);
      navigate("/signin");
      document.body.style.removeProperty("background-image");
    } catch (error) {
      console.log(error);
      navigate("/");
    }
  };
  const [current, setCurrent] = useState("home");

  const handleClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <div className="App">
      <Row>
          <Col span={4}></Col>
        <Col span={16}>
          <Menu
            onClick={handleClick}
            selectedKeys={[current]}
            mode="horizontal"
            style={{ justifyContent: "center" }}
          >
            <Menu.Item key="home" >
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="setting">
              <Link to="/settings">Setting</Link>
            </Menu.Item>
          </Menu>
        </Col>
        <Col span={4} className="logoutButton" >
          <Button type="primary" htmlType="submit" onClick={logout}>
            Logout
          </Button>
        </Col>
      </Row>
      <Routers/>
    </div>
  );
}

export default App;
