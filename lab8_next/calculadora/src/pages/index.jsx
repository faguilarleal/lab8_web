import { Inter } from "next/font/google";
import Display from "./Display.jsx";
import Button from "./Button.jsx";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const bufferContext = React.createContext();

export default function Home() {
  const [buffer, setBuffer] = React.useState("");

  const borrar = () => {
    setBuffer("");
  }

  const numero = (num) => {
    setBuffer(buffer + num);
    console.log(buffer);
  }

  const operador = (op) => {
    setBuffer(buffer + op);
    console.log(buffer);
  }

  return (
    <bufferContext.Provider value={{ buffer, setBuffer }}>
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
      <h1 className="text-4xl font-bold">Welcome to the Calculator</h1>
        <div className="calculador-container1">
          <div className="calculador-container">
            <div className="div-calculador">
              <Display text="100" />
            </div>
            <div className="div-calculador2">
              <Button text="%" bcolor="#05124E" />
              <Button text="+/-" bcolor="#05124E"/>
              <Button text="Clr" bcolor="#0C249C"/>
            </div>
            <div className="div-calculador3">
              <Button text="7" bcolor="#7A8FF8"/>
              <Button text="8" bcolor="#7A8FF8"/>
              <Button text="9" bcolor="#7A8FF8"/>
              <Button text="+" bcolor="#05124E"/>
            </div>
            <div className="div-calculador3">
              <Button text="4" bcolor="#7A8FF8"/>
              <Button text="5" bcolor="#7A8FF8"/>
              <Button text="6" bcolor="#7A8FF8"/>
              <Button text="-" bcolor="#05124E"/>
            </div>
            <div className="div-calculador3">
              <Button text="1" bcolor="#7A8FF8"/>
              <Button text="2" bcolor="#7A8FF8"/>
              <Button text="3" bcolor="#7A8FF8"/>
              <Button text="/" bcolor="#05124E"/>
            </div>
            <div className="div-calculador3">
              <Button text="0" bcolor="#7A8FF8"/>
              <Button text="." bcolor="#5B75F9"/>
              <Button text="=" bcolor="#0C249C"/>
              <Button text="*" bcolor="#05124E"/>
            </div>
          </div>
        </div>
    </main>
    </bufferContext.Provider>
  );
}
