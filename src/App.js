import React from 'react';
import './App.less';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Login from './views/Login/index'


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
          </Switch>
        </BrowserRouter>
    )
  }
}




export default App;
