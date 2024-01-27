/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import Card from './Card';
import './App.css'

// eslint-disable-next-line react/prop-types
const App = () => {
  const [data, setData] = useState([])
  const [cards, setCards] = useState([])
  const [error, setError] = useState(false)
  //const [isHidden, setIsHidden] = useState(true)
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://my-json-server.typicode.com/priscilla-wettlen/drag-race-server/queens');
        const queens = await response.json();
        setData(queens)
        setCards(queens.map((card) => ({ ...card, isHidden: true })));

      } catch (e) {
        setError(true)
      }
    }
    fetchData()
  }, [])
  
  const handleFlip = (id) => {
    setCards((prevCards) =>
      prevCards.map((card) => 
        card.id === id ? { ...card, isHidden: !card.isHidden } : card
      )) 
    console.log(id)
  }
  
  return ( 
    <>
      <h1>Drag Race Memory Game</h1>
      <div className='card__container'>
        {cards.map((queen) => (
          <div key={queen.id} onClick={() => handleFlip(queen.id)}>
            {queen.isHidden ?
              <div className='card__container-item' key={queen.id}>
              <img src="" width={300} />
            <p>Guess the queen</p>
              </div>
              :
             <div className='card__container-item' key={queen.id}>
            <img src={queen.url} width={300} />
            <p>{queen.name}</p>
        </div>
          }
              </div>

        ))}
      </div>
    </>
   );
}
 
export default App;