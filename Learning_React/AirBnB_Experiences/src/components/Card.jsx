import "../css/main.css"

export default function Card(props) {

    return (
        <div className="card">
            <img src={props.img} className="card--image"/>
            <div className="card--stats">
                <img src="../src/assets/star.png" className="card--star"/>
                <span>{props.rating}</span>
                <span className="gray">{props.num_reviews} • </span>
                <span className="gray">{props.country}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p><span className="bold">From {props.price}</span> / person</p>
        </div>
    )
}