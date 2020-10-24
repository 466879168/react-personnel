import React ,{Component,Fragment} from 'react'
import {Menu} from 'antd'
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import Router from "../../router/index"
import {Link} from 'react-router-dom'
const {SubMenu}  =Menu
class AsideMenu extends React.Component {
  constructor(props){
    super(props)
    console.log(Router)
  }
  //处理无子集
  renderMenu =(data)=>{
    return (<Menu.Item key={data.key}>
      <Link to={data.key}>
        <span>{data.title}</span>
      </Link>
    </Menu.Item>)
  }
  //处理子集菜单
  renderSubMenu=({title,key,child})=>{
    return (<SubMenu key={key}  title={title}>
      {
        child&&child.map((item)=>{
          return item.child && item.child.length>0?this.renderSubMenu(item):this.renderMenu(item)
        })
      }
    </SubMenu>)
  }

  render() {
    return (
        <Fragment>
          <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
          >
            {
              Router && Router.map((firstItem,index)=>{
                return firstItem.child && firstItem.child.length>0?this.renderSubMenu(firstItem):this.renderMenu(firstItem)
              })
            }
          </Menu>
        </Fragment>
    )
  }
}

export default AsideMenu