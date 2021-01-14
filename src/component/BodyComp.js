import React, { Component } from 'react'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button';

export default class BodyComp extends Component {
    render() {
        return (
            <div>
                <Button>asd</Button>
                <Box component="div" whiteSpace="nowrap">
                  White Space Nowrap
                </Box>
                <Box component="div" whiteSpace="normal">
                  White Space Normal
                </Box>
            </div>
        )
    }
}
