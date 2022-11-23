import ReactDOM from 'react-dom/client';
import React, { useState } from 'react';
import './App.css';

const root = ReactDOM.createRoot(document.getElementById("root"));

const globalStringVars = {
  colorBoton: '',
}

const App = (props) => {

/// State para controlar los estados de la vista del cliente  
  const [contador, updateContador] = useState(0);

/// Manejo de clicks en una sola función recibiendo props de onClick en los botones.
  const click = (props) =>{
      if (props.valor === true && props.opcion === 'num'){updateContador(contador+1);}
      else if (props.valor === false && props.opcion === 'num'){updateContador(contador-1);}
      else if (props.valor === '' && props.opcion === 'num'){updateContador(0);};

    if (props.opcion === 'color'){
      if (props.valor === 'rs'){
        globalStringVars.colorBoton =''
      }
      else{
        globalStringVars.colorBoton=props.valor
      }
      refresh();
    }
  }; 

/// Devuelve verdadero o falso
const esPar = contador % 2 === 0

/// Texto donde se imprimirá la información de si es par o impar
let texto = ''

/// IF Para comprobar si "esPar" es verdadero o false o contador vale '0'
if (contador === 0){texto='Suma o resta números.'} else if (esPar){texto='Es par'}else{texto='Es Impar'};


/// Devolver la vista al cliente con los datos procesados
/// Ejecución del componente
  return (

  <div className="Body">
    <div>
    <h2 className="Text-center" style={{color: 'black'}}>Práctica botones javascript:</h2>
    
    <p align='center'><h1 style={{color: globalStringVars.colorBoton}}>{contador}</h1></p>

    <p><small style={{color: 'black'}}>{texto}</small></p>

    <button onClick={()=>{click({valor: true, opcion: 'num'})}}>Incrementar</button>

    <button onClick={()=>{click({valor: false, opcion: 'num'})}}>Decrecer</button>

    <button onClick={()=>{click({valor: '', opcion: 'num'})}}>Reiniciar</button>

    <br />

    <button onClick={()=>{click({valor: 'red', opcion: 'color'})}}>COLOR ROJO</button>
    
    <button onClick={()=>{click({valor: 'green', opcion: 'color'})}}>COLOR VERDE</button>
    
    <button onClick={()=>{click({valor: 'blue', opcion: 'color'})}}>COLOR AZUL</button>

    <button onClick={()=>{click({valor: 'rs', opcion: 'color'})}}>Reiniciar Colores</button>
  </div>
  </div>

  );
};

const refresh= () =>{
  /// Imprimimos en pantalla la aplicacion 'App'
  root.render(<App />);
};

refresh()
