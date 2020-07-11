import React , { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Blog from './containers/Blog/Blog';


const manualScrollingContext = React.createContext(false);
class App extends Component {
  render(){
  return (
    <BrowserRouter>
    <div className="App">
     <Blog />
    </div>
    </BrowserRouter>
  );
  }
}

export default App;
