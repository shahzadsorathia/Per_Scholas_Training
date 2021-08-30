import React, { Component } from 'react'
import DivTwo from './DivTwo'

export default class DivOne extends Component {
    state = {
        tardis: {
            name: 'Time and Relative Dimension in Space',
            caps: false,
        },
    }
    render() {
        return (
            <div>
                <div>
                    <h3> {this.props.tardis.name} </h3>
                </div>
                <DivTwo tardis={this.state.tardis} />
            </div>
        );
    }
}
