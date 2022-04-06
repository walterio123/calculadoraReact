
import './App.css';
import logo from './Image/logo-xiaomi.png';
import Boton from './Components/Boton';
import Pantalla from './Components/Pantalla';
import BotonClear from './Components/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setinput]= useState('');

  const agregarInput = val=>{
    setinput(input + val);
  };

  const calcularResultado = () => {
    if(input){
      setinput(evaluate(input));
    }else{
      alert("Faltan caracteres para iniciar el calculo.");
    }
    
  };

  return (
    <div className='App'>
     <div className='logo-contenedor'>
       <img src= { logo }
       className='logo-xiaomi'
       alt='Logo Xiaomi' />
        <div className='contenedor-calculadora'>
          <Pantalla input={input}></Pantalla>
          <div className='fila'>
            <Boton manejarClic={agregarInput}>7</Boton>
            <Boton manejarClic={agregarInput}>8</Boton>
            <Boton manejarClic={agregarInput}>9</Boton>
            <Boton manejarClic={agregarInput}>*</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClic={agregarInput}>4</Boton>
            <Boton manejarClic={agregarInput}>5</Boton>
            <Boton manejarClic={agregarInput}>6</Boton>
            <Boton manejarClic={agregarInput}>/</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClic={agregarInput}>1</Boton>
            <Boton manejarClic={agregarInput}>2</Boton>
            <Boton manejarClic={agregarInput}>3</Boton>
            <Boton manejarClic={agregarInput}>+</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClic={calcularResultado}>=</Boton>
            <Boton manejarClic={agregarInput}>0</Boton>
            <Boton manejarClic={agregarInput}>.</Boton>
            <Boton manejarClic={agregarInput}>-</Boton>
          </div>
          <div className='fila'>
            <BotonClear manejarClear={()=> setinput('')}>
              Clear
            </BotonClear>
          </div>
        </div>
     </div>
    
    </div>
  );
}

export default App;
