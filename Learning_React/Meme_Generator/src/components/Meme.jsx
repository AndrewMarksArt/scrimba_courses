import "../css/main.css"
import memeData from "./memeData"

export default function Meme() {
    function handleClick () {
        const meme = memeData.data.memes[Math.floor(Math.random() * memeData.data.memes.length)]
        console.log(meme.url)
        return meme
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
        </main>
    )
}