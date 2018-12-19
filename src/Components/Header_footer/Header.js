import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import { BDLogo } from '../ui/icons';

class Header extends Component {
    render() {
        return (
            <AppBar
                position="fixed"
                style={{
                    backgroundColor:'#0a0a0a',
                    boxShadow: 'none',
                    padding:'10px 0',
                    borderBottom: '2px solid #d500fb'
                }}
            >
                <Toolbar style={{display:'flex'}}>
                    <div style={{flexGrow: 1}}>
                        <div className="header_logo">
                            <BDLogo
                                link={true}
                                linkTo="/"
                                width="90px"
                                height="80px"
                            ></BDLogo>
                        </div>  
                    </div>

                    <Link to="/the_team">
                            <Button color='primary' style={{
                                fontSize: '25px',
                                fontFamily: 'Share Tech Mono, monospace',
                                color: '#00e3ef'
                            }}>Team</Button>
                    </Link>
                    <Link to="/the_matches">
                        <Button color='primary' style={{
                                fontSize: '25px',
                                fontFamily: 'Share Tech Mono, monospace',
                                color: '#00e3ef'
                            }}>Matches</Button>
                    </Link>

                </Toolbar>
            </AppBar>
        );
    }
}

export default Header;