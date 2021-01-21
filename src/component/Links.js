import React, { Component } from 'react'

export default class Links extends Component {
    render() {
        return (
            <div style={p}>
                <p>
                    <span style={span2}>cesar@www</span>
                    <span>:</span>
                    <span style={span1}>~</span>
                    <span>$  ls -l</span>
                </p>
                <p>total 19</p>
                <p>
                    <span> drwxr-xr-x 2 cesar cesar  4096 Jan 1  2021 </span>
                    <span>
                        <a 
                          style={span1} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          href={'http://bit.ly/moralesCesarGitHub'}>
                           .git/
                        </a>
                    </span>
                </p>
                <p>
                    <span>-rwxr-xr-x 2 cesar cesar  4096 Jan 1  2021 </span>
                    <span style={span1}>
                        <a style={span1} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            href={'http://bit.ly/moralesCesarCV'}> curriculum.pdf</a>
                    </span>
                </p>
                <p>
                    <span>drwxr-xr-x 2 cesar cesar  4096 Jan 1  2021 </span>
                    <span>
                        <a style={span1} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            href={'http://bit.ly/moralesCesarLinkedin'}>
                             linkedin/</a>
                    </span>
                </p>
                <p>
                    <span style={span2}>cesar@www</span>
                    <span>:</span><span style={span1}>~</span>
                    <span>$ |</span>
                </p>
            </div>
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
    color: 'pink',
    fontWeight: 'bold'
  }
  
  const span2 = {
    color: 'purple',
    fontWeight: 'bold'
  }