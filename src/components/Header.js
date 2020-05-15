import React from 'react'

import logo from '../assets/images/logo.svg';
import logo2 from '../assets/images/logo2.svg';
import logo3 from '../assets/images/logo3.svg';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo3} style={{width: 85}}alt="" /></span>
        <h1>Daniel Trujillo</h1>
        <p>Mechanical Engineer | Web Developer</p>
    </header>
)

export default Header
