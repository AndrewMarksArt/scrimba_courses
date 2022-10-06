import "../css/main.css"

export default function Card({img, rating, num_reviews, country, title, price}) {

    return (
        <div className="card">
            <img src={img} className="card--image"/>
            <div className="card--stats">
                <img src="../src/assets/star.png" className="card--star"/>
                <span>{rating}</span>
                <span className="gray">{num_reviews} • </span>
                <span className="gray">{country}</span>
            </div>
            <p className="card--title">{title}</p>
            <p><span className="bold">From {price}</span> / person</p>
        </div>
    )
}