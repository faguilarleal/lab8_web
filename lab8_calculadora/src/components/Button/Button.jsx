import { useState, useEffect } from 'react'
import './Button.css'

const Button = ({ text, handleClick, bcolor,wd='100px' }) => {
  const [clicked, setclicked] = useState(false)

 
  return (
    <div className='button-container'>
        <button className="btn" onClick={handleClick}
        style={{backgroundColor: bcolor, width: wd}} >
            {text}
        </button>
    </div>
    
  )
}

export default Button