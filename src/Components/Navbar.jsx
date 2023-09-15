import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (
    <nav >
    <button>Change theme</button> 

    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Link to='/'>Inicio</Link>
      <Link to='/favs'>Favoritos</Link>
      <Link to='/contact'>Contacto</Link>
    </div>
  </nav>
  )
}

export default Navbar