import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div style={footer}>
                <div style={border}>
                    <p>Footer</p>
                </div>
            </div>
        )
    }
}

const border = {
    border: '1px solid white'
 }
  
const footer = {
    position: 'absolute',
    bottom: '1%',
    left: '50%'
}
