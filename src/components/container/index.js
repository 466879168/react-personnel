import React from 'react';

import {BrowserRouter,Switch,Route} from 'react-router-dom'
import User from '../../views/user/index'

import PrivateRouter from '../privatePouter/index'




class Container extends React.Component{
  constructor(props){
    super(props)
    this.state={}
  }
  render(){
    return (
          <Switch>
            <PrivateRouter exact path="/index/user/list" component={User} />
          </Switch>
    )
  }
}




export default Container;
