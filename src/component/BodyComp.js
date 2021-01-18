import React, { Component } from 'react'
import {Box, Container} from '@material-ui/core'
import Links from './Links'

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
        <Box  position='relative' top='80px'> 
          <br/>
          <Container style={{marginBottom:'150px'}}>
            <Box
              style={{borderColor:'pink'}}
              border={1} 
              bgcolor="text.primary">
                <Box
                  color='white' 
                  bgcolor="text.primary">
                  <p 
                    style={{ textAlign:'center'}}>
                      cesar@www:~
                  </p>
                </Box>
                <Links/>
            </Box>
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
