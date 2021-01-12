import React, { Component } from 'react'
import { Card } from 'react-bootstrap';

export default class ProfileCard extends Component {
    render() {
        return (   
           <div className='border' style={card}>          
            <Card className="bg-dark text-white">
              <Card.Img src="holder.js/100px270" height='270' width='100' alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </div>
        )
    }
}

const card = {
    position: 'absolute',
    top: '5%',
    width:'50%',
    align: 'center'
}
