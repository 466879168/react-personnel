import React ,{Component,Fragment} from 'react'
import './aside.less'
import AsideMenu from "../../../components/asideMenu/index"
class Aside extends React.Component {
  constructor(){
    super()
  }

  render() {
    return (
        <Fragment>
          <AsideMenu />
        </Fragment>
    )
  }
}

export default Aside