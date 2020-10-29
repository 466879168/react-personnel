import React ,{Component} from 'react'

import {Form,Input,InputNumber,Button,Radio,message} from 'antd'

class DepartmentAdd extends Component{
  constructor(props){
    super(props)
    this.state={
      loading:false,

    }
  }

  render() {
    return (
        <Form ref="form" >
          <Form.Item label="部门名称" name="name">
            <Input />
          </Form.Item>
          <Form.Item label="人员数量" name="number">
            <InputNumber min={0} max={100} />
          </Form.Item>
          <Form.Item label="禁启用" name="status">
            <Radio.Group>
              <Radio value={false}>禁用</Radio>
              <Radio value={true}>启用</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="描述" name="content">
            <Input.TextArea />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit">确定</Button>
          </Form.Item>
        </Form>
    )
  }
}

export default DepartmentAdd
