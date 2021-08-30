
import { Component } from 'react';
import './App.css';
import DivOne from './DivOne';



class App extends Component{

  state = {
    tardis: {
      name: 'Time and Relative Dimension in Space',
      caps: false,
    },

  }
  changeIt = (text) => {
    if (this.state.tardis.caps) {
      this.setState({
        tardis: {
          name: this.state.tardis.name.toLowerCase(),
          caps: false
        }
      })
    } else {
      this.setState({
        tardis: {
          name: this.state.tardis.name.toUpperCase(),
          caps: true
        }
      })
    }
  }

  render() {
    return (
          <div onClick={this.changeIt}>
          <DivOne DivOne={this.state.tardis}  />
        </div>
     
    );
  }
}

export default App;
