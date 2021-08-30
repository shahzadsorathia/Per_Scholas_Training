import React, { Component } from 'react'
import DivTwo from './DivTwo'

export default class DivOne extends Component {
  
    render() {
        return (
            <div>
               <DivTwo DivTwo={this.props.DivOne} />
            </div>
        );
    }
}
