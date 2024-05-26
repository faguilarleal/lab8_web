import { useState, useEffect } from 'react'
import './Button.css'

const Button = ({ text, handleClick, bcolor='',hcolor ='',wd='' }) => {
  const [hover, setHover] = useState(false)

  const handleKeyDown = (e) => {
    if ((e.key === text)){
      handleClick()
    }
  }

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
        onMouseEnter={() => setHover(true)}
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