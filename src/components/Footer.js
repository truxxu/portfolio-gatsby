import { Link } from 'gatsby'
import React from 'react'

const Footer = props => (
  <footer id="footer">
    <section>
      <h2>Let's get in touch</h2>
      <p>
        Did I caught your attention? I'm always looking for the next big
        challenge. Contact me and we can discuss how I can tend to your coding
        needs.
      </p>
    </section>
    <section>
      <h2>Contact info</h2>
      <dl className="alt">
        <dt>Location</dt>
        <dd>Bogota, Colombia</dd>
        <dt>Email</dt>
        <dd>
          <a
            href="mailto:danielfetrujillo@gmail.com"
            target="_blank"
          >
            danielfetrujillo@gmail.com
          </a>
        </dd>
      </dl>
      <ul className="icons">
        <li>
          <a
            href="https://twitter.com/truxxu"
            className="icon fa-twitter alt"
            target="_blank"
          >
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/truxxu"
            className="icon fa-github alt"
            target="_blank"
          >
            <span className="label">GitHub</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/daniel-felipe-trujillo-50224ab9/"
            className="icon fa-linkedin alt"
            target="_blank"
          >
            <span className="label">Linkedin</span>
          </a>
        </li>
      </ul>
    </section>
    <p className="copyright">
      Design by Truxxu & <a href="https://html5up.net">HTML5 UP</a>. {(new Date).getFullYear()}
    </p>
  </footer>
)

export default Footer
