import React from 'react'
import { css, jsx } from '@emotion/react'

function Header() {
    return (
        <div>
            <header className="home__header" style={{ backgroundColor: "black", color: "#c37c7c", fontSize: "0.5rem", height: "1.8rem", display: "flex", alignItems: "center" }}>
                <span style={{ margin: "0 15rem", fontSize: "0.5rem" }}>Welcome To At's Debut Online Shopping.</span>
            </header>
        </div>
    )
}

export default Header
