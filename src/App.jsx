/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import Card from './Card';
import './App.css'

// eslint-disable-next-line react/prop-types
const App = () => {
  const [data, setData] = useState([])
  const [cards, setCards] = useState([])
  const [error, setError] = useState(false)
  const [sortedCards, setSortedCards] = useState([])
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://my-json-server.typicode.com/priscilla-wettlen/drag-race-server/queens');
        const queens = await response.json();
        setData(queens)
        setCards(queens.map(queen => (queen)).slice(7));
       
      } catch (e) {
        setError(true)
      }
    }
    fetchData()
  }, [])
  
  const shuffleCards = () => {
    const suffledArray = [...cards, ...cards]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.floor(Math.random() * 1000000) }))
    
    setSortedCards(suffledArray)
  }

  console.log(sortedCards)
  
  return ( 
    <>
      <h1>Drag Race Memory Game</h1>
      <button onClick={shuffleCards}>New game</button>
      <div className='card-grid'>
       
      </div>
    </>
   );
}
 
export default App;