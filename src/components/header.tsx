import { Link } from "gatsby"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#e01f1f`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <Link to="/" style={{ color: 'white' }}>Home</Link>
      <Link to="/about/">Themen</Link>
      <Link to="/termine/">Termine</Link>
      <Link to="/lightningtalks/">Mitmachen</Link>
      <Link to="/sponsoren/">Unterstützen</Link>
      <Link to="/kontakt/">Kontakt</Link>
      <Link to="/impressum/">Impressum</Link>
    </div>
  </header>
)

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
