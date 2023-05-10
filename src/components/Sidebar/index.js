import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/k2.png'
import LogoSubtitle from '../../assets/images/kk.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import {
  faLinkedin,
  faGithub,
  //faYoutube,
  //faSkype,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faUser,
  faEnvelope,
  //faSuitcase,
  //faBars,
  //faClose,
} from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => (
  <div className="nav-bar">
    <Link>
      <div className="logo" to="/">
        <img src={LogoS} alt="logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="kulveer-kaur" />
      </div>
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="about-link"
        to="/about"
      >
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="contact-link"
        to="/contact"
      >
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>
    </nav>
    <ul>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/kulveer-kaur-1394aa207"
        >
          <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/Kulveer-Kaur"
        >
          <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/invites/contact/?i=e97thb318hec&utm_content=pax7k19"
        >
          <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" />
        </a>
      </li>
    </ul>
  </div>
)
export default Sidebar
