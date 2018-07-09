import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className='container-fluid page-header'>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark fixed-top'>
        <NavLink to='/' className='navbar-brand'>OMI - Quintana Roo</NavLink>

        <div className='collapse navbar-collapse'>
          <ul className='navbar-nav'>
            <li className='nav-item'><NavLink className='nav-link' exact to='/'>Inicio</NavLink></li>
            <li className='nav-item'><NavLink className='nav-link' to='/convocatoria'>Convocatoria</NavLink></li>
            <li className='nav-item'><NavLink className='nav-link' to='/resultados'>Resultados</NavLink></li>
            <li className='nav-item'><NavLink className='nav-link' to='/material'>Material</NavLink></li>
            {/* <li className='nav-item'><NavLink className='nav-link' to='/anuncios'>Anuncios</NavLink></li>
            <li className='nav-item'><NavLink className='nav-link' to='/contacto'>Contacto</NavLink></li> */}
          </ul>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'><a className='nav-link' href='https://www.facebook.com/omiqroo'><i className='fab fa-facebook-square fa-2x' /></a></li>
            <li className='nav-item'><a className='nav-link' href='https://www.youtube.com/channel/UCaqljU1BgPVfQF36xp7bpyA'><i className='fab fa-youtube-square fa-2x' /></a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
