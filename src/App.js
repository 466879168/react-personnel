import React from 'react';
import './App.less';
import {BrowserRouter,Switch,Route} from 'react-router-dom'


import Login from './views/Login/Index'
import TableDemo from "./views/tableDemo/index";
import Index from "./views/Index/Index"
import PrivateRouter from "./components/privateRouter/Index"


class App extends React.Component{
  constructor(props){
    super(props)
    this.state={}
  }
  render(){
    return (
        <BrowserRouter>
          <Switch>
            <Route exact path="/login" render={()=><Login />}/>
            <PrivateRouter path="/index" component={Index} />
          </Switch>
        </BrowserRouter>
    )
  }
}




export default App;
