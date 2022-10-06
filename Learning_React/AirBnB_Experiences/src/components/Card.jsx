import "../css/main.css"

export default function Card({coverImg, rating, reviewCount, location, title, price, openSpots}) {
    let badgeText
    if (openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (location === "Online") {
        badgeText = "Online"
    }

    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`../src/assets/${coverImg}`} className="card--image"/>
            <div className="card--stats">
                <img src="../src/assets/star.png" className="card--star"/>
                <span>{rating}</span>
                <span className="gray">({reviewCount}) • </span>
                <span className="gray">{location}</span>
            </div>
            <p className="card--title">{title}</p>
            <p className="card--price"><span className="bold">From ${price}</span> / person</p>
        </div>
    )
}