import Hero from './components/Hero'
import NavBar from './components/NavBar'
import Card from './components/Card'
import CardData from './components/CardData'


export default function App() {
    const cardElements = CardData.map(card => {
        return <Card 
                    coverImg={card.coverImg}
                    rating={card.stats.rating}
                    reviewCount={card.stats.reviewCount}
                    location={card.location}
                    title={card.title}
                    price={card.price}
                />
    })
    return (
        <>
            <NavBar />
            <Hero />
            <section className='card--list'>
                {cardElements}
            </section>
            
        </>
    )
}