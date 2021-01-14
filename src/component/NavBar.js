import React, { Component } from 'react'

export default class NavBar extends Component {
    render() {
        return (
            <div style={position}>
                <div style={border}>
                  <p>home</p>
                </div>
                <br/>
                <div style={border}>
                  <p>page1</p>
                </div>
                <br/>
                <div style={border}>
                  <p>page2</p>
                </div>
            </div> 
        )
    }
}

/* STYLES */
const position = {
    position: 'fixed',
    top: '40%',
    left: '20px',
    border: '1px solid black'
    
}
const border = {
    border: '1px solid white'
}
