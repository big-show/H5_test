import React from 'react';
import { BrowserRouter, Route, Link ,Switch} from "react-router-dom";
import {Provider} from 'react-redux';
import store from './store';
import Home from './home/index'
import Result from './result/index'
import QuestionOne from './question/questionOne/index'
import QuestionTwo from './question/questionTwo/index';
import QuestionThree from './question/questionThree/index';
import QuestionFour from './question/questionFour/index';
import './App.css';

function App() {
  return (
    <div className='root'>
      <Provider store={store}>
      <BrowserRouter>
          <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route exact path='/result' component={Result}></Route>
          <Route exact path='/questionOne' component={QuestionOne}></Route>
          <Route exact path='/questionTwo' component={QuestionTwo}></Route>
          <Route exact path='/questionThree' component={QuestionThree}></Route>
          <Route exact path='/questionFour' component={QuestionFour}></Route>
          </Switch>
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
