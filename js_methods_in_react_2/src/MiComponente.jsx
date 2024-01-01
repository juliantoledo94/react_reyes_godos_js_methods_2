import React from 'react'

const MiComponente = ({reyes}) => {
    
    const borrar = (e) =>{
        console.log(e.target.parentNode)
        e.target.parentNode.remove()
    }
    
    const resultado = reyes.filter(e=>!e.nombre.includes("g")).map(e =><div key={e.nombre}>{e.nombre}<button onClick={borrar}>borrar</button></div>)

   
  return (
    <>
        {resultado}
    </>
  )
}

export default MiComponente