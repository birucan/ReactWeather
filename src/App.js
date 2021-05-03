import logo from './logo.svg';
import React from 'react'
import './App.css';

//Local component imports
import {AppBarUI} from './components/AppBar.js'
import {Content} from './components/Content.js'



function App() {
  //This state hook handles what page is loaded
  const [pageState, setPageState] = React.useState('weather')

  //this is the handler for the page state
  function pageHandler(value){
    setPageState(value)
  }
  
  return (
    <div className="App">
    <div className="appBar">
      <AppBarUI pageState={pageState} setPageState={pageHandler}/>
    </div>
      <Content pageState={pageState}/>
    </div>
    
  );
}

export default App;
