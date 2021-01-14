import React, { Component } from 'react'
import Box from '@material-ui/core/Box'

export default class BodyComp extends Component {
  render() {
    return (
      <Box  zIndex='1' position="absolute" top="28%" right="20%" left="20%" style={{background: 'white'}} >
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
