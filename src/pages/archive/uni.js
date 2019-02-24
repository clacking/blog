import React from 'react'
import Layout from "components/layout"
import SEO from "components/seo"
import { withPrefix } from 'gatsby'
import { css } from '@emotion/core'

export default function Uni () {
    return (
        <Layout title={'Archive: Uni project'}>
            <SEO title={'archive'} />
            <>
                <p>大学での卒業研究で開発したシステムです。</p>
                <p></p>
                <ul>
                    <li>Git: tbd</li>
                    <li>Poster: <a href={withPrefix('files/nwtn_pstr_public.pdf')}>PDF</a></li>
                </ul>
            </>
        </Layout>
    )
}
