import React, { Component } from 'react'
import DivThree from './DivThree';
import App from 'react';


export default class DivTwo extends Component {

    render() {
        return (

            <div >
                <DivThree DivThree={this.props.DivTwo} />
                <DivThree DivThree={this.props.DivTwo} />
            </div>

        );
    }
}
