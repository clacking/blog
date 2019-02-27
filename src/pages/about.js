import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from "../components/seo"
import { css } from '@emotion/core'

// basically HTML
export default function AboutMe() {
    const icon = css`
        height: 200px;
        width: 200px;
        border: 1px solid;
        margin: 0;
    `
    return (
        <Layout title={'About me'}>
            <SEO title={'About me'} />
            <div css={css`text-align: center;`}>
                <img alt={'my logo'} css={icon} src={"https://avatars2.githubusercontent.com/u/37972714?s=460&v=4"} />
                <p>Name: Toya KINOSHITA</p>
                <p>Current: University student.</p>
                <p>I'm interested in programming especially software and Web.</p>
                <p>And I like geeky/nerdly techs 😜.</p>
                <h3>Programming</h3>
                <p>Usually use JavaScript for any Web and NodeJS and some C++.</p>
                <p>Also I'm interested in some languages so I use/learn other languages too.</p>
                <h3>Hobbies</h3>
                <p>Car, Motorsports, Mechanical Keyboards and some tech things.</p>
                <h3>Links/Contacts</h3>
                <p>Twitter: <a href="https://twitter.com/comfykb">@comfykb</a></p>
                <p>Github: <a href="https://github.com/clacking">clacking</a></p>
                <p>Email: click[at]clacking.net</p>
                <h3>Archives</h3>
                <p><Link to={'/archive/uni'}>IoT + home automation system Project at university...</Link></p>
            </div>
        </Layout>
    )
}
