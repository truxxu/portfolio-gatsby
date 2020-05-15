import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'
import profile from '../assets/images/profile.jpeg'
import Header from '../components/Header'
import Layout from '../components/layout'
import Nav from '../components/Nav'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  render() {
    return (
      <Layout>
        <Helmet title="Gatsby Starter - Stellar" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        ></Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">
          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>About me</h2>
                </header>
                <p>
                  Mechanical engineer with a Master’s degree in Energy
                  Technology. Always keen on learning new things. Passionate
                  about science and technology, experimenting and solving
                  challenges. I want to keep creating sophisticated and
                  beautifully designed apps.
                </p>
                <ul className="actions">
                  <li>
                    <Link to="/generic" className="button">
                      Learn More
                    </Link>
                  </li>
                </ul>
              </div>
              <span className="image">
                <img src={profile} alt="" />
              </span>
            </div>
          </section>

          <section id="first" className="main special">
            <header className="major">
              <h2>Education</h2>
            </header>
            <ul className="features">
              <li>
                <span className="icon major style1 fa-cogs"></span>
                <h3>BSc in Mechanical Engineering</h3>
                <p>
                  Universidad de América, Bogota, 2005-2010
                </p>
              </li>
              <li>
                <span className="icon major style3 fa-leaf"></span>
                <h3>MSc in Energy Technology</h3>
                <p>
                  Lappeenranta University of Technology, Lappeenranta, 2012-2015
                </p>
              </li>
              <li>
                <span className="icon major style5 fa-code"></span>
                <h3>Full-Stack Web Development</h3>
                <p>
                  Le Wagon Coding Bootcamp, Berlin, 2018
                </p>
              </li>
            </ul>
          </section>

          <section id="second" className="main special">
            <header className="major">
              <h2>Ipsum consequat</h2>
              <p>
                Donec imperdiet consequat consequat. Suspendisse feugiat congue
                <br />
                posuere. Nulla massa urna, fermentum eget quam aliquet.
              </p>
            </header>
            <ul className="statistics">
              <li className="style1">
                <span className="icon fa-code-fork"></span>
                <strong>5,120</strong> Etiam
              </li>
              <li className="style2">
                <span className="icon fa-folder-open-o"></span>
                <strong>8,192</strong> Magna
              </li>
              <li className="style3">
                <span className="icon fa-signal"></span>
                <strong>2,048</strong> Tempus
              </li>
              <li className="style4">
                <span className="icon fa-laptop"></span>
                <strong>4,096</strong> Aliquam
              </li>
              <li className="style5">
                <span className="icon fa-diamond"></span>
                <strong>1,024</strong> Nullam
              </li>
            </ul>
            <p className="content">
              Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl
              eu arcu faucibus hendrerit vel a risus. Nam a orci mi, elementum
              ac arcu sit amet, fermentum pellentesque et purus. Integer maximus
              varius lorem, sed convallis diam accumsan sed. Etiam porttitor
              placerat sapien, sed eleifend a enim pulvinar faucibus semper quis
              ut arcu. Ut non nisl a mollis est efficitur vestibulum. Integer
              eget purus nec nulla mattis et accumsan ut magna libero. Morbi
              auctor iaculis porttitor. Sed ut magna ac risus et hendrerit
              scelerisque. Praesent eleifend lacus in lectus aliquam porta. Cras
              eu ornare dui curabitur lacinia.
            </p>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn More
                  </Link>
                </li>
              </ul>
            </footer>
          </section>

          <section id="third" className="main special">
            <header className="major">
              <h2>Work Experience</h2>
            </header>
            <h3>Web UI Developer</h3>
            <h4>Globant, Feb. 2020 - Presently</h4>
            <p className="content_justify">
              Part of a team of developers migrating the website for National
              Geographic to Disney's in-house implementation of the React library.
            </p>
            <h3>Front-End Developer</h3>
            <h4>Handmadetech, May 2019 - Presently</h4>
            <p className="content_justify">
              &#9702; Responsible of building a front end for mobile devices for a
              location-based marketing platform. This React Native RESTful app
              make use of Redux for state management, AsyncStorage for data
              persistance and geolocation. <br/>
              &#9702; Part of a development team building a platform that offers beauty
              products and services. This React.js responsive web app includes
              features such as user accounts, bookings and card payments.
            </p>
            <h3>Freelance Full-Stack Developer</h3>
            <h4>Jobhoot, Dec. 2018 - Feb 2019</h4>
            <p className="content_justify">
              Built a platform that connect employers with people looking for
              jobs, using a Rails back-end, PostgreSQL, ERB views and Bootstrap.
            </p>
            <h3>Co-Founder</h3>
            <h4>HorMinka, Jan. 2016 - Nov 2017</h4>
            <p className="content_justify">
              Started a non-profit organisation to promote science and technology
              as tools for social development. Developed IoT devices for home
              automation on both hardware and software side. Collaborated in the
              creation of apps to encourage civic engagement. Participated as
              speaker in conferences for topics such as Information Security and
              Free Software.
            </p>
          </section>

          <section id="fourth" className="main special">
            <header className="major">
              <h2>Congue imperdiet</h2>
              <p>
                Donec imperdiet consequat consequat. Suspendisse feugiat congue
                <br />
                posuere. Nulla massa urna, fermentum eget quam aliquet.
              </p>
            </header>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button special">
                    Get Started
                  </Link>
                </li>
                <li>
                  <Link to="/generic" className="button">
                    Learn More
                  </Link>
                </li>
              </ul>
            </footer>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Index
