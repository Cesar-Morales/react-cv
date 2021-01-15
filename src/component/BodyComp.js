import React, { Component } from 'react'
import {Box, Container} from '@material-ui/core'

export default class BodyComp extends Component {
  render() {
    return (
      /*all*/
      <Box  zIndex='1'  boxShadow={3}  position="absolute" top="135px"  right="15%" left="15%" style={border} >
        {/*photo*/}
        <Box zIndex='1' position="absolute" left="0%" right="0%" top="-75px">
          <img width='150px' height='150px' src={process.env.PUBLIC_URL + '/images/profileImage.png'} style={centerImg} alt="background" /> 
        </Box>
        {/*body*/}
        <Box  position='relative' top='70px'> 
          <br/>
          <Container style={{marginBottom:'100px'}}>
            <p >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt nibh ut suscipit sodales. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut a ullamcorper sapien. Aenean in risus sit amet erat tempor ultricies quis non ligula. Phasellus neque massa, tempus eget aliquam quis, hendrerit sit amet felis. Maecenas rhoncus tellus sed dictum mattis. Donec gravida, mi sed viverra condimentum, massa turpis ultrices lacus, eu accumsan ante urna eu metus. Nulla vestibulum feugiat venenatis.
              Sed quis magna malesuada, luctus nisi eget, varius sapien. Praesent efficitur maximus enim in pulvinar. Duis ornare convallis massa, id ultricies lectus rhoncus vel. Ut sodales dui eu turpis aliquam hendrerit. Duis ut eros a felis mattis bibendum pulvinar tempus magna. Nam fringilla venenatis augue, ac imperdiet sapien viverra in. Nullam odio dui, placerat sed rhoncus a, facilisis elementum nisi. Praesent eleifend velit tellus, vitae tincidunt urna venenatis eu. In rhoncus ante dui, a volutpat felis mollis in. Nunc vehicula massa sed felis molestie pellentesque. Vestibulum eget quam ex. Duis vitae tempor leo. Nunc at consequat quam. Nam eu dui lorem. Donec tempor orci nec nunc semper placerat.
              Fusce ornare est eu ligula lobortis, quis vehicula ipsum euismod. 
            </p>
          </Container>
        </Box>
      </Box>
    )
  }
}

const border = {
  border: '2px solid white',
  background: 'white',
  borderRadius: '10px',
}
const centerImg = {
  display:'block',
  margin:'auto',
  borderRadius: '100px',
  border: '2px solid white'
}
