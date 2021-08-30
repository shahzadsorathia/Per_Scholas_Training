import React, { Component } from 'react'

export default class DivTwo extends Component {
    render() {
        return (
            <div>
                <h3> {this.props.tardis.name} </h3>
            </div>
        );
    }
}
