import React from 'react';
import { BDLogo } from '../ui/icons';

const Footer = () => {
    return ( 
        <footer className='bck_blue'>
            <div className='footer_logo'>
                <BDLogo
                    width='90px'
                    height='80px'
                    link={true}
                    linkTo='/'
                />
            </div>
            <div style={{
                fontFamily: 'Share Tech Mono, monospace',
                color: '#00e3ef'
            }}>
                Brutal Deluxe 2105. All rights reserved.
            </div>
        </footer>
     );
}
 
export default Footer;