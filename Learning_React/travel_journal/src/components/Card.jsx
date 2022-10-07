import "../css/main.css"

export default function Card() {
    return (
        <>
            <div className="card--container">
                <div>
                    <img src="../src/assets/hawaii.png" className="location-img" />
                </div>

                <div className="card--details">
                    <div className="card--location--details">
                        <img src="../src/assets/map icon.png" className="map-icon" />
                        <p className="location--state">HAWAII</p>
                        <a href="https://goo.gl/maps/AUXRSh6xCYKBTLDj7" className="location--link">View on Google Maps</a>
                    </div>
                    <div className="card--location--text">
                        <h3 className="card--title">Aulani, Disney Resort</h3>
                        <p className="card--date">7 June, 2022 - 12 June, 2022</p>
                        <p className="card--description">
                            Aulani, a Disney Resort & Spa, is a beachside resort hotel at the Ko Olina Resort in Kapolei, 
                            Hawaii on the island of Oahu. Affiliated with the Disney Vacation Club, Aulani was the third 
                            Disney "stand-alone" hotel.
                        </p>
                    </div>
                </div>
            </div>
            <hr className="card--divider" />
        </>
    )
}