import React, { Component } from 'react'
import Box from '@material-ui/core/Box'


export default class CoverPage extends Component {
    render() {
        return (
            <Box left="0%" position="absolute"  top='0%' zIndex="0">
                <img width='100%' height='100%' src={process.env.PUBLIC_URL + '/images/code.jpg'} alt="background" /> 
            </Box>
        )
    }
}
