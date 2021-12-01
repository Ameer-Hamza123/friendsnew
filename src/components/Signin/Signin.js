import { Form, Input, Button, Row, Col } from 'antd';
import 'antd/dist/antd.css';
import '../styles/styles.scss';
import { Link } from 'react-router-dom';
import { reload, signInWithEmailAndPassword } from '@firebase/auth';
import { auth,db } from '../firebase/firebase';
import { useNavigate } from 'react-router';
import { collection,getDocs } from '@firebase/firestore';
const Signin = () => {
    const navigate  = useNavigate();
    const onFinish = async (values) => {
        console.log('Success:', values);
        var email = values.email;
        var password = values.password;
        var name;
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data().Name}`);
            if (email === doc.data().Email){
                if (password === doc.data().Password){
                    name = doc.data().Name;
                    localStorage.setItem('username', JSON.stringify(name))
                }
            }
        });
        try {
            const users = await signInWithEmailAndPassword(auth, email, password);
            console.log(users);
            navigate('/')
            document.getElementsByTagName('input').value = " ";
            alert(`Welcome Back ${name}`);
        }
        catch (error) {
            console.log(error)
            alert("no")
            window.location.reload();
            //navigate('/signin')
            //document.getElementsByTagName('input').value = " ";
        }
        document.getElementsByTagName('input').value = " ";
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <>
            <Row>
                <Col className="mainborder" span={10} offset={7}>
                    <h1>Sign In</h1>
                    <Form name="basic" labelCol={{ span: 4, }} wrapperCol={{ span: 20, }} initialValues={{ remember: true, }} onFinish={onFinish} onFinishFailed={onFinishFailed} >
                        <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please input your Email!', type: 'email' },]} >
                            <Input />
                        </Form.Item>

                        <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!', },]} >
                            <Input.Password />
                        </Form.Item>
                        <p>Don't Have an Account <Link to="/signup">SignUp</Link></p>
                        <Form.Item wrapperCol={{ offset: 10, span: 4, }} >
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>

        </>
    );
};
export default Signin;