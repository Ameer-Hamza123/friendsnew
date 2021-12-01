import { Form, Input, Button, Row, Col } from 'antd';
import 'antd/dist/antd.css';
import '../styles/styles.scss';
import { Link } from 'react-router-dom';
import { auth,db } from '../firebase/firebase';
import { createUserWithEmailAndPassword } from '@firebase/auth';
import {collection, addDoc} from 'firebase/firestore';
import { useNavigate } from 'react-router';
const Signup = () => {
    const navigate = useNavigate();
    const onFinish = async(values) => {
        console.log('Success:', values);
        var name  = values.fullname;
        var email = values.email;
        var password = values.password;
        try {
            const user = await createUserWithEmailAndPassword(auth, email, password);
            console.log(user);
            const docRef = addDoc(collection(db, "users"), {
                Name:name,
                Email:email,
                Password:password
              });
            alert('Successfully Created Account')
            navigate('/signin');
            document.getElementsByTagName('input').value = " ";
        }catch (error){
            console.log(error);
            document.getElementsByTagName('input').value = " ";
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <>
            <Row>
                <Col className="mainborder" span={10} offset={7}>
                    <h1>Sign Up</h1>
                    <Form name="basic" labelCol={{ span: 6, }} wrapperCol={{ span: 18, }} initialValues={{ remember: true, }} onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off" >
                        <Form.Item label="Full Name" name="fullname" rules={[{ required: true, message: 'Please input your FullName!', },]} >
                            <Input />
                        </Form.Item>
                        <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please input your Email!', type: 'email' },]} >
                            <Input />
                        </Form.Item>

                        <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!', },]} >
                            <Input.Password />
                        </Form.Item>
                        <p>Already Have an Account <Link to="/signin">Signin</Link></p>
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
export default Signup;