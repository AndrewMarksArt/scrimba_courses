import "../css/main.css"

export default function Header() {
    return (
        <div className="header">
            <img src="./src/assets/troll_face.png" className="header--logo" />
            <h3 className="header--title">MEME GENERATOR</h3>
            <p className="header--project">React Course -- Project 3</p>
        </div>
    )
}