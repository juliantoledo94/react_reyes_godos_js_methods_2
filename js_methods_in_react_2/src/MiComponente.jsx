import React from 'react'
import "./App.css"

const MiComponente = ({reyes}) => {
    
    const borrar = (e) =>{
        console.log(e.target.parentNode)
        e.target.parentNode.remove()
    }
    
    const resultado = reyes.filter(e=>!e.nombre.includes("g")).map(e =><div className='caja' key={e.nombre}>{e.nombre}<button onClick={borrar}>borrar</button></div>)

   
  return (
    <>
        {resultado}
    </>
  )
}

export default MiComponente