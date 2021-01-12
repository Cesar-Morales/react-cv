import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        return (
            <div style={card}>
              <p>Card</p>
            </div>
        )
    }
}

const card = {
    position: 'absolute',
    top: '5%',
    left: '50%'
}
