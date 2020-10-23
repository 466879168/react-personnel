import React,{Component,Fragment} from 'react'
import "./header.less"
class LayoutHeader extends React.Component {
  constructor(){
    super()
  }

  render() {
    return (
        <Fragment>
          <h1 className="logo">
            <span>
              LOGO
            </span>
          </h1>
        </Fragment>
    )
  }
}

export default LayoutHeader