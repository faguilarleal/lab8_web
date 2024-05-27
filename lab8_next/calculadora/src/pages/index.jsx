import { Inter } from "next/font/google";
import Display from "./Display.jsx";
import Button from "./Button.jsx";
import React from "react";
import { evaluate, format } from 'mathjs';

const inter = Inter({ subsets: ["latin"] });


export default function Home() {
  const [display, setDisplay] = React.useState("");

  
  // agregar numero o operador al display
  const numero = (text) => {
    const newDisplay = display + text;
    setDisplay(newDisplay);
    console.log('display numero', display);
}

const operador = (text) => {
    const newDisplay = display + " "+text+ " ";
    setDisplay(newDisplay);
    console.log('display', newDisplay);
}

const clear = () => {
    setDisplay("");
    console.log('display', "");
}

const calcular = () => {
  try {
    const result1 = evaluate(display.toString())
    const result = format(result1, { precision: 9 })
    setDisplay(result)
  } catch (error) {
    setDisplay('Error') // catch
  }
}

const porcentaje = () => {
    setDisplay(display / 100);
}

const masMenos = () => {
    setDisplay(display * -1);
}

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
      <h1 className="text-4xl font-bold">Welcome to my Calculator</h1>
        <div className="calculador-container1">
          <div className="calculador-container">
            <div className="div-calculador">
              <Display text={display} />
            </div>
            <div className="div-calculador2">
              <Button text="%" bcolor="#05124E" buttonClick={porcentaje}/>
              <Button text="+/-" bcolor="#05124E" buttonClick={masMenos}/>
              <Button text="Clr" bcolor="#0C249C" buttonClick={clear}/>
            </div>
            <div className="div-calculador3">
              <Button text="7" bcolor="#7A8FF8" buttonClick={numero}/>
              <Button text="8" bcolor="#7A8FF8" buttonClick={numero}/>
              <Button text="9" bcolor="#7A8FF8" buttonClick={numero}/>
              <Button text="+" bcolor="#05124E" buttonClick={operador}/>
            </div>
            <div className="div-calculador3">
              <Button text="4" bcolor="#7A8FF8" buttonClick={numero}/>
              <Button text="5" bcolor="#7A8FF8" buttonClick={numero}/>
              <Button text="6" bcolor="#7A8FF8" buttonClick={numero}/>
              <Button text="-" bcolor="#05124E" buttonClick={operador}/>
            </div>
            <div className="div-calculador3">
              <Button text="1" bcolor="#7A8FF8" buttonClick={numero}/>
              <Button text="2" bcolor="#7A8FF8" buttonClick={numero}/>
              <Button text="3" bcolor="#7A8FF8" buttonClick={numero}/>
              <Button text="/" bcolor="#05124E" buttonClick={operador}/>
            </div>
            <div className="div-calculador3">
              <Button text="0" bcolor="#7A8FF8" buttonClick={numero}/>
              <Button text="." bcolor="#5B75F9" buttonClick={numero}/>
              <Button text="=" bcolor="#0C249C" buttonClick={calcular}/>
              <Button text="*" bcolor="#05124E" buttonClick={operador}/>
            </div>
          </div>
        </div>
    </main>
  );
}
