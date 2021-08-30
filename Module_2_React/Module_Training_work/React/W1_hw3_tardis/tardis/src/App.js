import './App.css';
import DivOne from './DivOne';



class App {
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

  render() {
    return (
      <div>
        <div>
          <DivOne tardis={this.state.tardis} />
        </div>
      </div>
    );
  }
}

export default App;
