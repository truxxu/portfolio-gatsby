import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'

const Nav = (props) => (
    <nav id="nav" className={props.sticky ? 'alt' : ''}>
        <Scrollspy items={ ['intro', 'first', 'second', 'third', 'fourth'] } currentClassName="is-active" offset={-300}>
            <li>
                <Scroll type="id" element="intro">
                    <a href="#">About me</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="first">
                    <a href="#">Education</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="second">
                    <a href="#">Skills</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="third">
                    <a href="#">Experience</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="fourth">
                    <a href="#">Portfolio</a>
                </Scroll>
            </li>
        </Scrollspy>
    </nav>
)

export default Nav
