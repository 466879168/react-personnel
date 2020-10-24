import React from 'react';
import './App.less';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Login from './views/Login/index'
import TableDemo from "./views/tableDemo";
import Index from "./views/Index"
import PrivateRouter from "./components/privatePouter/index"


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
            <Route exact path="/table" component={TableDemo}/>
            <PrivateRouter exact path="/index" component={Index} />

          </Switch>
        </BrowserRouter>
    )
  }
}




export default App;
