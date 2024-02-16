import { Link, useMatch, useResolvedPath } from "react-router-dom"
import logo from "./images/outfitted-logo.png"

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/outfitted" className="site-title">
        <img src={logo} alt="logo" />
      </Link>
      <ul>
        <CustomLink to="outfitted/about">About</CustomLink>
        <CustomLink to="outfitted/wardrobe">Wardrobe</CustomLink>
        <CustomLink to="outfitted/wardrobe#daily-outfit-section">
          Daily Outfit
        </CustomLink>
        <CustomLink to="outfitted/top-trends">Top Trends</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const handleClick = event => {
    if (to.includes("#")) {
      event.preventDefault()
      const targetId = to.split("#")[1]
      const targetElement = document.getElementById(targetId)
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <li>
      <Link to={to} onClick={handleClick} {...props}>
        {children}
      </Link>
    </li>
  )
}
