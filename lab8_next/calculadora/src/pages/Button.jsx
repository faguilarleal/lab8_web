import { useState, useEffect } from 'react'

const Button = ({ text, buttonClick, bcolor='',hcolor ='' }) => {
  const [hover, setHover] = useState(false)
  const [click, setClick] = useState(false)

  // cuando haya un click en el boton, se ejecuta la funcion handleClick
  const handleKeyDown = (e) => {
    if ((e.key === text)||(e.key === 'Enter' && text === '=')||(e.key === 'Backspace' && text === 'Clr')){
      setClick(true)
      }
  }

  const handleClick = () => {
    setClick(true)
  }

  // esta funcion permite que el hover effect se coloque y quite despues de presionar alguna tecla
  useEffect(() => {
    if(click){
      buttonClick(text)
      setHover(true)
      setTimeout(() => {
        setClick(false)
        setHover(false)
      }, 100);
    }

  },[click])

 
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
        onMouseEnter={() => setHover(true)} // simular un hover effect 
        onMouseLeave={() => setHover(false)}
        onClick={handleClick}
        style={{
            backgroundColor: hover ? hcolor : bcolor,
            color: hover ? 'black' : 'white',
        }}>
            {text}
        </button>
    </div>
  )
}

export default Button

