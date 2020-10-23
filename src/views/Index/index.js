import React ,{Component} from 'react'
import "./index.less"
import {Layout} from 'antd'
import Aside from "./components/aside"
import LayoutHeader from './components/header.js'

const {Header,Sider,Content} =Layout

class Index extends React.Component {
  constructor(){
    super()
  }

  render() {
    return (
        <Layout className="layout-wrap">
          <Header className="layout-header">
            <LayoutHeader />
          </Header>
          <Layout>
            <Sider width="250px">
              <Aside />
            </Sider>
            <Content className="layout-main">main</Content>
          </Layout>
        </Layout>
    )
  }
}

export default Index