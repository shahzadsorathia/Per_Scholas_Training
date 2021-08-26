import React from 'react'
import Header from './Header.js';
import Player from './Player.js';
import './App.css'

//App is going to be our parent Component
class App extends React.Component{
  //class animal
  // classpet extends class animal

  render(){
    return(
      <div className='app'> 
      <Header/> 
      <div className='player-conatiner'>

      <Player/> 
      <Player/> 
      </div>
      </div>
    )
  }
}
export default App;
