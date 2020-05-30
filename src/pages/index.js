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
        <Helmet title="Daniel Trujillo - Personal Site" />

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
                <span className="icon major style5 fa-code"></span>
                <h3>Full-Stack Web Development</h3>
                <p>
                  Le Wagon Coding Bootcamp, Berlin, Germany, 2018
                </p>
              </li>
              <li>
                <span className="icon major style4 fa-leaf"></span>
                <h3>MSc in Energy Technology</h3>
                <p>
                  Lappeenranta University of Technology, Lappeenranta, Finland,
                  2012-2015
                </p>
              </li>
              <li>
                <span className="icon major style1 fa-cogs"></span>
                <h3>BSc in Mechanical Engineering</h3>
                <p>
                  Universidad de América, Bogota, Colombia, 2005-2010
                </p>
              </li>
            </ul>
          </section>

          <section id="second" className="main special">
            <header className="major">
              <h2>Skills</h2>
              <p>
                So much to learn, so little time!
              </p>
            </header>
            <div className="skillsCol">
              <p>&#9702; React.js</p>
              <p>&#9702; React Native</p>
              <p>&#9702; Ruby on Rails</p>
              <p>&#9702; PostgreSQL</p>
              <p>&#9702; HTML5</p>
              <p>&#9702; CSS</p>
              <p>&#9702; Sass</p>
              <p>&#9702; Bootstrap</p>
              <p>&#9702; Heroku</p>
              <p>&#9702; Git</p>
              <p>&#9702; 2D and 3D CAD modelling</p>
              <p>&#9702; IoT</p>
              <p>&#9702; Arduino embedded systems design</p>
            </div>
            <br/>
            <header className="major">
              <h2>Languages</h2>
            </header>
            <div className="skillsCol">
              <p>&#9702; Spanish (Native)</p>
              <p>&#9702; English (High proficiency)</p>
              <p>&#9702; German (Basic)</p>
            </div>
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
              &#9702; Ensure code follows good practices and meet quality
              standards before being pushed to production. <br/>
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
              <h2>Portfolio</h2>
              <p>
                Over time I have taken part in a number of projects, as a hobby, as a freelancer and as a full-time developer.
              </p>
            </header>
            <footer className="major">
              <ul className="statistics">
                <li className="style1">
                  <span className="icon fa-code-fork"></span>
                  <strong>1,035</strong> Contributions
                </li>
                <li className="style2">
                  <span className="icon fa-folder-open-o"></span>
                  <strong>23</strong> Repositories
                </li>
                <li className="style4">
                  <span className="icon fa-laptop"></span>
                  <strong>Multiple</strong> Languages
                </li>
              </ul>
              <ul className="actions">
                <li>
                  <a
                    href="https://github.com/truxxu"
                    className="button"
                    target="_blank"
                  >
                    Check out my Github profile
                  </a>
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
