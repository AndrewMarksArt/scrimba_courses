import React from "react"
import ReactDOM from "react-dom"

const page = (
    <div>
        <h1 className="header">This is JSX</h1>
        <p>This is a paragraph</p>
    </div>
)
console.log(page)

ReactDOM.render(page, document.getElementById("root"))


