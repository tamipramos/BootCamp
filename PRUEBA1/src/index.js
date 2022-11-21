import ReactDOM from 'react-dom/client';
import React from 'react';
import { useState } from 'react';

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = (props) => {

/// State para controlar los estados de la vista del cliente  
  const [contador, updateContador] = useState(0);

/// Manejo de clicks en una sola función recibiendo props de onClick en los botones.
  const click = (props) =>{
    if (props === true){updateContador(contador+1);}
    else if (props === false){updateContador(contador-1);}
    else{updateContador(0);}
  };

/// Devuelve verdadero o falso
const esPar = contador % 2 === 0

/// Texto donde se imprimirá la información de si es par o impar
let texto = ''

/// IF Para comprobar si "esPar" es verdadero o false o contador vale '0'
if (contador === 0){texto='Suma o resta números.'} else if (esPar){texto='Es par'}else{texto='Es Impar'};

/// Devolver la vista al cliente con los datos procesados
  return (
  <div>

    <h2>Práctica botones javascript:</h2>
    
    <h1>{contador}</h1>

    <button onClick={()=>{click(true)}}>Incrementar</button>

    <button onClick={()=>{click(false)}}>Decrecer</button>

    <button onClick={()=>{click('')}}>Reiniciar</button>
  
    <p><small>{texto}</small></p>
  
  </div>
  );
};

/// Imprimimos en pantalla la aplicacion 'App'
root.render(<App />);
