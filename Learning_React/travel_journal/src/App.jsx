import Card from "./components/Card"
import NavBar from "./components/NavBar"
import location_data from "./components/location_data"

export default function App() {
    const trips = location_data.map(trip => {
        return <Card 
                    key={trip.id}
                    trip={trip}
                />
    })
    return (
        <>
            <NavBar />
            {trips}
        </>
    )
}