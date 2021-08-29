import react, {Component} from 'react';
import './App.css';
import DivOne from './DivOne';
import DivTwo from './DivTwo';
import DivThree from './DivThree';


class App extends Component{

  state = {
  tardis: {
    name: 'Time and Relative Dimension in Space',
    caps: false,
  },

}
  changeIt = (text) =>{
    if (this.state.tardis.caps) {
      this.setState({
        tardis: {
          name: text.toLowerCase(),
          caps: false
        }
      })
    } else {
      this.setState({
        tardis: {
          name: text.toUpperCase(),
          caps: true
        }
      })
    }
  }

render(){
return (
    <div className="App">
    
     <DivOne tardis={this.state.tardis}/>
    
    
    </div>
  );
}
}

export default App;
