import React from 'react'
import Card from '../Components/Card'
import { useCharStates } from '../Components/utils/global.context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const {medicos} = useCharStates()

  return (
 
  
      <div className="card-grid container">
        {medicos.map(medico => <Card medico={medico} key={medico.id}/>)}
      </div>
    
  )
}

export default Home