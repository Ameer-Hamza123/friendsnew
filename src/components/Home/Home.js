import { signOut } from "@firebase/auth";
import { Row,Col, Button } from "antd";
import { useNavigate } from "react-router";
import { auth } from "../firebase/firebase";
const Home = () =>{
    const navigate = useNavigate();
    const name = JSON.parse(localStorage.getItem('username'));
    const logout = async()=>{
        try{
            await signOut(auth);
            navigate('/signin')
            document.body.style.removeProperty('background-image')
        }
        catch(error){
            console.log(error);
            navigate('/')
        }
    }
    return(
        <>
        <Row>
            <Col span={20}>
        <h1>Welcome {name}</h1>
            </Col>
            <Col span={4}>
                <Button type="primary" htmlType="submit" onClick={logout}>
                    Logout
                </Button>
            </Col>
        </Row>
        </>
    );
};
export default Home;