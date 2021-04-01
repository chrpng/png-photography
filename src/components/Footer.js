import React from 'react'

const Footer = () => (
  <div id="footer">
    <div className="inner">
      <ul className="icons">
        <li>
          <a href="http://fb.me/png.photographyy" className="icon fa-facebook">
            <span className="label">Facebook</span>
          </a>
        </li>
        <li>
          <a href="http://instagram.com/png_photographyy" className="icon fa-instagram">
            <span className="label">Instagram</span>
          </a>
        </li>
				<li>
          <a href="https://github.com/chrpng" className="icon fa-github">
            <span className="label">Github</span>
          </a>
        </li>
      </ul>
      <ul className="copyright">
        <li>&copy; Png Photography</li>
        <li>
          Web Dev: <a href="https://github.com/chrpng">Chris Png</a>
        </li>
        <li>
          Design: <a href="http://html5up.net">HTML5 UP</a>
        </li>
      </ul>
    </div>
  </div>
)

export default Footer
