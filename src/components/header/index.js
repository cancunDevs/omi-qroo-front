import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className='container-fluid page-header'>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <NavLink to='/' className='navbar-brand'>OMI - Quintana Roo</NavLink>

        <div className='collapse navbar-collapse'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'><NavLink className='nav-link' exact to='/'>Inicio</NavLink></li>
            <li className='nav-item'><NavLink className='nav-link' to='/convocatoria'>Convocatoria</NavLink></li>
            <li className='nav-item'><NavLink className='nav-link' to='/resultados'>Resultados</NavLink></li>
            <li className='nav-item'><NavLink className='nav-link' to='/material'>Material</NavLink></li>
            <li className='nav-item'><NavLink className='nav-link' to='/anuncios'>Anuncios</NavLink></li>
            <li className='nav-item'><NavLink className='nav-link' to='/contacto'>Contacto</NavLink></li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
