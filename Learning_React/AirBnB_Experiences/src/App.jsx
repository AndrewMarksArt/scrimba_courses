import Hero from './components/Hero'
import NavBar from './components/NavBar'
import Card from './components/Card'


export default function App() {
    return (
        <>
            <NavBar />
            <Hero />
            
            <Card 
                img="./src/assets/katie_zaferes_card.png"
                rating="5.0"
                num_reviews="(6)"
                country="USA"
                title="Life lessons with Katie Zaferes"
                price="$136"
            />
            <Card 
                img="./src/assets/wedding_photography.png"
                rating="5.0"
                num_reviews="(30)"
                country="USA"
                title="Learn wedding photography"
                price="$125"
            />
        </>
    )
}