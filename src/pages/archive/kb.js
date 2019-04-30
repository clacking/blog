import React from 'react'
import Layout from "components/layout"
import SEO from "components/seo"
import { withPrefix } from 'gatsby'

export default function Uni () {
    return (
        <Layout title={'My keyboards'}>
            <SEO title={'My Keyboards'} />
            <p>My keyboard collection. I love highend kustom keyboards.</p>
            <h3>TADA68</h3>
            <p>Work well. Used about 2 year.</p>
            <ul>
                <li>Switch: Gateron Red (and some MX Black for repair)</li>
            </ul>
            <h3>TGR Jane v2</h3>
            <p>Still waiting for shipping.</p>
            <ul>
                <li>WKL</li>
                <li>Color: Blue (Blue Gray)</li>
                <li>Switch: Cherry MX Black (205g0)</li>
                <li>Keyset: CRP APL</li>
            </ul>
            <h3>Noxary 280</h3>
            <p>Still waiting for production.</p>
            <ul>
                <li>WKL</li>
                <li>Color: Olive</li>
                <li>Switch: Cherry MX Black (205g0 or 3202)</li>
                <li>Keyset: GMK Camping</li>
            </ul>
            <h3>Realforce 86u</h3>
            <p>realforce.</p>
            <h2>My Render</h2>
            <h3>HK CTKL (Compact TKL)</h3>
            <p><img src={withPrefix('files/HWCTKL.png')} /></p>
            <p><img src={withPrefix('files/HWCTKL2.png')} /></p>
            <p>Made 2017. Inspired by Dio80.</p>
            <p>This is just render, it doesn't have actual screw holes for mounting and plate is not good.</p>
        </Layout>
    )
}
