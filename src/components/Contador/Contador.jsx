import React, {useState} from "react" //importanto o hook usestate.
import "./Contador.css"

function Contador (){

const [numero, setNumero]= useState(0)

function Adicionar (){
    if (numero< 20) {
    setNumero(numero + 1)
   }
}

//Criando uma função para retirar 1 valor do número (arrowfunction)

const Subtrair = ()=>{
    if (numero> 0){
    setNumero(numero - 1)
    }
}

const Limpar = ()=>{
    setNumero(0)
}
    
    return(
    <section className="boxContador">
         <h2>{numero}</h2>
         <div className="boxButton">
         <button onClick={Adicionar}>+</button>
         <button onClick={Subtrair}>-</button>
         <button onClick={Limpar}>C</button>
         </div>

    </section>
  )
}

export default Contador