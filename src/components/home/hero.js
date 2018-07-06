import React from 'react';
import omiQRooLogo from '../../omi-qroo-logo.png';

const Hero = () => {
  return (
    <div className='jumbotron jumbotron-fluid'>
      <div className='container'>
        {/* <h1 className='display-4'>Olimpiada de Informática Quintana Roo</h1> */}
        <img src={omiQRooLogo} alt='omi-qroo' className='omi-qroo-logo' />
        <p className='lead'>
          La <b>Olimpiada Mexicana de Informática (OMI)</b> es un concurso a nivel nacional
          para jóvenes con facilidad para resolver problemas prácticos mediante la lógica
          y el uso de computadoras, que busca promover el desarrollo tecnológico en México
          y encontrar a los mejores programadores, quienes formarán la selección mexicana
          para participar en las próximas <b>Olimpiadas Internacionales de Informática (IOI)</b>.
        </p>
        <p className='lead'>
          La OMI es un concurso en el que sobre todo se requiere tener facilidad, habilidad
          y voluntad de resolver problemas, utilizando la lógica, el ingenio y las computadoras.
        </p>

        <p className='lead'>
          <a className='btn btn-primary btn-lg' href='http://www.olimpiadadeinformatica.org.mx/' role='button' target='_blank' rel='noopener noreferrer'>Más información</a>
        </p>
      </div>
    </div>
  );
};

export default Hero;
