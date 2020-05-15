import React from 'react'

import logo2 from '../assets/images/logo2.svg';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo2} style={{width: 85}}alt="" /></span>
        <h1>Daniel Felipe Trujillo</h1>
        <p>Mechanical Engineer |  Web Developer</p>
    </header>
)

export default Header
