import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const [char, setChar] = useState({})
  const [loading, setLoading] = useState(true)
  const {id} = useParams()
  console.log(id)
  const url = 'https://jsonplaceholder.typicode.com/users/' + id

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => {
        setChar(data)
        setLoading(false)
    })
}, [])

  return (
    <>
      <h1>Tarjeta del Dentista </h1>

      <div className="dentist-Information" style={{display:'flex', justifyContent:'center',margin:20}}>
        {loading ? 'Cargando...' : <>

        
            <h3 style={{margin:20}} >Name: {char.name}</h3>
            <h4 style={{margin:20}}>Telefono: {char.phone}</h4>
            <h4 style={{margin:20}}>Telefono: {char.email}</h4>
            <h4 style={{margin:20}}>Telefono: {char.website}</h4>
      
           
           
            
            
        </>}
    </div>


      
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail