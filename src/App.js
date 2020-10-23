import React from 'react';
import './App.less';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Login from './views/Login/index'
import TableDemo from "./views/tableDemo";


class App extends React.Component{
  constructor(props){
    super(props)
    this.state={}
  }
  render(){
    return (
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/table" component={TableDemo}/>

          </Switch>
        </BrowserRouter>
    )
  }
}




export default App;
