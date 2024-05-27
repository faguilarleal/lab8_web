import { useState, useEffect } from 'react'

const Button = ({ text, buttonClick, bcolor='',hcolor ='',wd='' }) => {
  const [hover, setHover] = useState(false)
  const [click, setClick] = useState(false)

  // cuando haya un click en el boton, se ejecuta la funcion handleClick
  const handleKeyDown = (e) => {
    if ((e.key === text)||(e.key === 'Enter' && text === '=')||(e.key === 'Backspace' && text === 'Clr')){
      setClick(true)
      buttonClick(text)
      console.log('click2', text)
    }
  }

  const handleClick = () => {
    console.log('click tecla', text)
    buttonClick(text)
  }

  
  useEffect(() => {
    if(click){
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
            width: wd
        }}>
            {text}
        </button>
    </div>
  )
}

export default Button

