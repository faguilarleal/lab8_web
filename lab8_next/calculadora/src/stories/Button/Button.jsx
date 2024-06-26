import { useState, useEffect } from 'react'
import './Button.css'

const Button = ({ text, handleClick, bcolor='',hcolor ='',wd='' }) => {
  const [hover, setHover] = useState(false)

  // cuando haya un click en el boton, se ejecuta la funcion handleClick
  const handleKeyDown = (e) => {
    if ((e.key === text)||(e.key === 'Enter' && text === '=')||(e.key === 'Backspace' && text === 'Clr')){
      setHover(true)
      handleClick()
    }
  }

  const handleKeyUp = (e) => {
    setHover(false)
  }

  // se agrega un event listener para el keydown
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
 
  return (
    <div className='button-container'>
        <button className="btn" 
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        onMouseEnter={() => setHover(true)} // simular un hover effect 
        onMouseLeave={() => setHover(false)}
        style={{
            backgroundColor: hover ? hcolor : bcolor,
            width: wd
        }}>
            {text}
        </button>
    </div>
  )
}

export default Button