import React, { Component } from 'react'
import {Box} from '@material-ui/core/'


export default class BackgroundImage extends Component {
    render() {
        return (
            <Box position="relative" top='0%'>
                <Box left="18%" position="absolute" top='20px' zIndex="0">
                    <img width='200' style={styleImg} src={process.env.PUBLIC_URL + '/images/moralesCesarLogo.png'} alt="background" />
                </Box>
            </Box>
        )
    }
}

const styleImg = {
  display:'block',
  margin:'auto',
  borderRadius: '100px',
  border: '1px solid white'
}

