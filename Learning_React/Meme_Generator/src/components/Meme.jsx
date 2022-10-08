import "../css/main.css"
import memeData from "./memeData"
import React from "react"

export default function Meme() {
    const [memeImg, setMemeImg] = React.useState("")
    function handleClick () {
        const meme = memeData.data.memes[Math.floor(Math.random() * memeData.data.memes.length)]
        setMemeImg(meme.url)
    }
    return (
        <main>
            <div className="form">
                <input 
                    type="text" 
                    className="form--input" 
                    placeholder="Top text" 
                />
                <input 
                    type="text" 
                    className="form--input" 
                    placeholder="Bottom text" 
                />
                <button 
                    className="form--button" 
                    onClick={handleClick}
                >
                    Get a new meme image 🖼️
                </button>
            </div>
            <div>
                <img src={memeImg} className="memeImg"/>
            </div>
        </main>
    )
}