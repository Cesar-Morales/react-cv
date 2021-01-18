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
        <Box  position='relative' top='80px'> 
          <br/>
          <Container style={{marginBottom:'150px'}}>
          <Box
            style={{borderColor:'pink'}}
            border={1} 
            bgcolor="text.primary">
              <Box
                color='white' 
                bgcolor="text.secondary">
                <p style={{ textAlign:'center'}}>moralesCesar@www:~</p>
              </Box>
              <div style={p}>
                  <p><span style={span2}>moralesCesar@www</span><span>:</span><span style={span1}>~</span><span>$  ls -l</span></p>
                  <p>total 19</p>
                  <p><span>drwxr-xr-x 2 moralesCesar moralesCesar  4096 Jan 1  2021</span>  <span style={span1}>.git/</span></p>
                  <p><span>-rwxr-xr-x 2 moralesCesar moralesCesar  4096 Jan 1  2021</span>  <span style={span1}>curriculum.pdf</span></p>
                  <p><span>drwxr-xr-x 2 moralesCesar moralesCesar  4096 Jan 1  2021</span>  <span style={span1}>linkedln/</span></p>
                  <p><span style={span2}>moralesCesar@www</span><span>:</span><span style={span1}>~</span><span>$ init 0</span></p>
              </div>
          </Box>
          </Container>
        </Box>
      </Box>
    )
  }
}
const p = {
  color: 'white',
  fontFamily: 'Ubuntu, "times new roman", times, roman, serif',
  padding: '10px',
  paddingLeft: '20px',
  paddingRight: '20px',
  lineHeight:'15px'
}
const span1 = {
  color: 'pink'
}

const span2 = {
  color: 'purple'
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
