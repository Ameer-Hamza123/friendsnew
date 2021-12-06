import { Form, Input, InputNumber, Button, Col,Row } from 'antd';
import '../styles/styles.scss';
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import React, { useState } from 'react';
import {collection, addDoc} from 'firebase/firestore';
import { auth,db } from '../firebase/firebase';
const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 18,
  },
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};


const Settings = () => {
    const [fileList, setFileList] = useState([
        {
          uid: '-1',
          name: 'image.png',
          status: 'done',
          url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
      ]);
    
      const onChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
        console.log(fileList)
      };
    
      const onPreview = async file => {
        let src = file.url;
        if (!src) {
          src = await new Promise(resolve => {
            const reader = new FileReader();
            reader.readAsDataURL(file.originFileObj);
            reader.onload = () => resolve(reader.result);
        });
    }
    console.log(file.originFileObj);
        console.log(src)
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow.document.write(image.outerHTML);
      };
    
    const onFinish = (values) => {
        console.log(values);
        const docRef = addDoc(collection(db, "users"), {
            Name:values.name,
            Email:values.email,
            Age:values.age,
            Description:values.description
          });
      };
return(
<>
<Row className="mt-2">
    <Col span={12} offset={6}>
        <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
        <ImgCrop rotate>
          <Upload action="https://www.mocky.io/v2/5cc8019d300000980a055e76" listType="picture-card" fileList={fileList} onChange={onChange} onPreview={onPreview}>
            {fileList.length < 1 && '+ Upload'}
          </Upload>
        </ImgCrop>
            <Form.Item name={['user', 'name']} label="Name" rules={[ { required: true, }, ]} >
              <Input />
            </Form.Item>
            <Form.Item name={['user', 'email']} label="Email" rules={[ { type: 'email', },]} >
              <Input />
            </Form.Item>
            <Form.Item name={['user', 'age']} label="Age" rules={[ { type: 'number', min: 0, max: 99, }, ]} >
              <InputNumber style={{width:'100%'}}/>
            </Form.Item>
            <Form.Item name={['user', 'description']} label="Description">
              <Input.TextArea />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 3 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
        </Form>
    </Col>
</Row>

</>
);
}
export default Settings;