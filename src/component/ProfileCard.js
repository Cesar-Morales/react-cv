import React, { Component } from 'react'
import {Box} from '@material-ui/core'

export default class ProfileCard extends Component {
    render() {
        return (
            <Box width={1}>
                <img width='100%' height='100%' src={process.env.PUBLIC_URL + '/images/code.jpg'} alt="background" /> 
            </Box>
        )
    }
}
