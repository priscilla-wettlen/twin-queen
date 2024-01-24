/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import Card from './Card';
import './App.css'

const App = () => {
  const [data, setData] = useState([])
  const [error, setError] = useState(false)
  const [isHidden, setIsHidden] = useState(true);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://my-json-server.typicode.com/priscilla-wettlen/drag-race-server/queens');
        const queens = await response.json();
        setData(queens)

      } catch (e) {
        setError(true)
      }
    }
    fetchData()
  },[])
  return ( 
    <>
      <h1>Drag Race Memory Game</h1>
      <div className='card__container'>
        {data.map((queen) => (
          <Card key={queen.id} name={queen.name} url={queen.url} />
        ))}
      </div>
    </>
   );
}
 
export default App;