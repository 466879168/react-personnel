import React from 'react'
import "./index.less"

import LoginForm from './Login'
import Register from './Register'

class Login extends React.Component{
  constructor(){
    super()
    this.state={
      formType:"login"
    }
  }

  switchForm=(value)=>{
    this.setState({
      formType:value
    })
  }

  render(){
    return (
        <div className="p-login">
          <div className="form-wrap">
            <div>
              {
                this.state.formType === 'login'?<LoginForm switchForm={this.switchForm} />:<Register switchForm={this.switchForm} />
              }
            </div>
          </div>
        </div>
    )
  }
}

export default Login