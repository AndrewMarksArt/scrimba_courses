// import React from "react"
// import ReactDOM from "react-dom/client"

function Header() {
    return (
        <header>
            <nav>
                <img src="./icon.jpg" width="40px" />
            </nav>
        </header>
    )
}

function MainContent() {
    return (
        <div>
            <h1>FunFacts about React</h1>

            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100k stars on Github</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    )
}

function Footer() {
    return (
        <footer>
            <small>@ 2022 Marks development. all rights reserved</small>
        </footer>
    )
}

function Page() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Page />)
