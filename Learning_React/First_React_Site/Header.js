import React from "react"

export default function Header() {
    return (
        <header className="header">
            <nav className="nav">
                <img src="./icon.jpg" className="nav-logo" />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}
