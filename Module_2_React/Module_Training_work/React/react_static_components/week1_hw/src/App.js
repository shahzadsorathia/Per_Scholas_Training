import logo from './logo.svg';
import './App.css';
import NameComponent from './NameComponent';
import Leftside from './leftside';
import Info from './info';
import Body from './Body';

function App() {
  return (
    <div className="App">
     
      <div id='main'>
      <Leftside/>
      <Info/>
      <Body/>
      </div>
      
    </div>
  );
}

export default App;
