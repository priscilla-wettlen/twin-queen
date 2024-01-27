/* eslint-disable no-unused-vars */
import { useState} from 'react';
import './App.css'

const Card = (queen) => {
const [isHidden, setIsHidden] = useState(true);

const handleFlip = () => {
  setIsHidden(!isHidden)
  
}
  
  return (
    <div>
      {
        isHidden ? 
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
  )    
}
 
export default Card;