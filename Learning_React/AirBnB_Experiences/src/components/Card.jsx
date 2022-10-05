import "../css/main.css"

export default function Card() {
    return (
        <div className="card">
            <img src="../src/assets/katie_zaferes_card.png" className="card--image"/>
            <div className="card--stats">
                <img src="../src/assets/star.png" className="card--star"/>
                <span>5.0</span>
                <span className="gray">(6) • </span>
                <span className="gray">USA</span>
            </div>
            <p>Life lessons with Katie Zaferes</p>
            <p><span className="bold">From $136</span> / person</p>
        </div>
    )
}