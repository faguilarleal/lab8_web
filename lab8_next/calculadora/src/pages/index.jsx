import { Inter } from "next/font/google";
import Display from "./Display.jsx";
import Button from "./Button.jsx";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
      <h1 className="text-4xl font-bold">Welcome to the Calculator</h1>
        <div className="calculador-container1">
          <div className="calculador-container">
            <div className="div-calculador">
              <Display text="100" />
            </div>
            <div className="div-calculador2">
              <Button text="%"/>
              <Button text="+/-"/>
              <Button text="Clr"/>
            </div>
            <div className="div-calculador3">
              <Button text="7"/>
              <Button text="8"/>
              <Button text="9"/>
              <Button text="+"/>
            </div>
            <div className="div-calculador3">
              <Button text="4"/>
              <Button text="5"/>
              <Button text="6"/>
              <Button text="-"/>
            </div>
            <div className="div-calculador3">
              <Button text="1"/>
              <Button text="2"/>
              <Button text="3"/>
              <Button text="/"/>
            </div>
            <div className="div-calculador3">
              <Button text="0"/>
              <Button text="."/>
              <Button text="="/>
              <Button text="*"/>
            </div>
          </div>
        </div>
    </main>
  );
}
