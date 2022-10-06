import Hero from './components/Hero'
import NavBar from './components/NavBar'
import Card from './components/Card'
import CardData from './components/CardData'


export default function App() {
    const cardElements = CardData.map(item => {
        return <Card
                    key={item.id} 
                    item = {item}
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