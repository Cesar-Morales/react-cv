import React, { Component } from 'react'
import {Box, Grid} from '@material-ui/core'

export default class BodyComp extends Component {
  render() {
    return (
      <Box  zIndex='1' position="absolute" top="28%" right="20%" left="20%" style={{background: 'white'}} >
        <Grid container spacing={2}>
        <Grid item xs={4}>
          <p style={border}></p>
        </Grid>
        <Grid item xs={4}>
          <Box style={border} zIndex='3' position="absolute" left="0%" right="0%" top="-100px">
            <img  width='200' height='200' src={process.env.PUBLIC_URL + '/images/profileImage.png'} alt="background" /> 
          </Box>
        </Grid>
        <Grid item xs={4}>
          <p style={border}></p>
        </Grid>
        </Grid>
        <Box>TEXT</Box>
        <Box>TEXT</Box>
        <Box>TEXT</Box>
        <Box>TEXT</Box>
        <Box>TEXT</Box>
        <Box>TEXT</Box>
        <Box>TEXT</Box>
        <Box>TEXT</Box>
        <Box>TEXT</Box>
        <Box>TEXT</Box>
        <Box>TEXT</Box>
        <Box>TEXT</Box>
        <Box>TEXT</Box>
        <Box>TEXT</Box>
        <Box>TEXT</Box>
        <Box>TEXT</Box>
        <Box>TEXT</Box>
        <img width='100%' height='70%' src={process.env.PUBLIC_URL + '/images/moralesCesarLogo.png'} alt="background" /> 
      </Box>
    )
  }
}

const border = {
  border: '2px solid red'
}
