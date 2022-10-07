import "../css/main.css"

export default function Card(props) {
    return (
        <>
            <div className="card--container">
                <div>
                    <img src={`../src/assets/${props.trip.coverImg}`} className="location-img" />
                </div>

                <div className="card--details">
                    <div className="card--location--details">
                        <img src="../src/assets/map icon.png" className="map-icon" />
                        <p className="location--state">{props.trip.state}</p>
                        <a href={props.trip.mapLink} className="location--link" target="_blank">View on Google Maps</a>
                    </div>
                    <div className="card--location--text">
                        <h3 className="card--title">{props.trip.title}</h3>
                        <p className="card--date">{props.trip.dates}</p>
                        <p className="card--description">{props.trip.description}</p>
                    </div>
                </div>
            </div>
            <hr className="card--divider" />
        </>
    )
}