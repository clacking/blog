import React from "react"
import { Link } from "gatsby"
import { css } from '@emotion/core'

import { rhythm } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { title, children } = this.props

    // Inline component css
    const headerStyle = css`
        font-family: 'Merriweather','Georgia',serif;
        text-align: center;
        margin-bottom: ${rhythm(1.5)};
        margin-top: 0;
        font-size: 2em;
    `
    const footerStyle = css`
        text-align: right;
    `
    const mainStyle = css`
        font-family: "Roboto", sans-serif;
    `

    return (
      <>
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(32),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
        <header css={css`text-align:center;`}>
            <h3 css={headerStyle}>
                <Link
                  style={{
                    boxShadow: `none`,
                    textDecoration: `none`,
                    color: `inherit`,
                  }}
                  to={`/`}
                >
                  {title}
                </Link>
            </h3>
            <p><Link to={'/about'}>About</Link></p>
        </header>
        <main css={mainStyle}>{children}</main>
        <footer css={footerStyle}>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
          {` `}
          and hosted by
          {` `}
          <a href="https://www.netlify.com/">Netlify</a>
        </footer>
      </div>
    </>
    )
  }
}

export default Layout
