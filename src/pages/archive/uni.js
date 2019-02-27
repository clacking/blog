import React from 'react'
import Layout from "components/layout"
import SEO from "components/seo"
import { withPrefix } from 'gatsby'
import { css } from '@emotion/core'

export default function Uni () {
    return (
        <Layout title={'Archive: University'}>
            <SEO title={'Archive'} />
            <p>大学での卒業研究で開発したシステムです。</p>
            <p>Keywords: Node.JS, ReactJS, WebSocket, IoT, ESP32, Automation, Amazon Alexa, Python, OpenCV</p>
            <ul>
                <li>Git: tbd</li>
                <li>Poster: <a href={withPrefix('files/nwtn_pstr_public.pdf')}>PDF</a></li>
            </ul>
            <h3>Links</h3>
            <ul>
                <li><a href="http://cs-oecu.jp/190110-2/">http://cs-oecu.jp/190110-2/</a></li>
            </ul>
        </Layout>
    )
}
