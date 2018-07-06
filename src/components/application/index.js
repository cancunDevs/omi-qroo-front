import React, { Component } from 'react';
import convocatoria from '../../Convocatoria2018.jpg';

class Application extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'Convocatoria OMI Q-ROO 2018',
      description: 'Si tienes un gusto por las computadoras, y te gustan los retos de pensamiento eres un excelente candidato para participar en la Olimpiada Mexicana de Informática, enterate de los requisitos necesarios en el siguiente poster.',
      omiEvents: [
        { title: 'OMI 2018', date: 'del 3 al 8 de Mayo de 2018', description: 'Olimpiada Mexicana de Informática 2018 - CDMX.'},
      ]
    }
  }
  render() {
    const { title, description, omiEvents } = this.state;

    return (
      <div className='page-content'>
        <div className='container'>
          <h1>{title}</h1>
          <div>{description}</div>
          
          <img className='convocatoria-poster' src={convocatoria} alt='convocatoria2018' />

          <h2>Fechas Importantes</h2>

          <ul className='convocatoria-events'>
            {omiEvents.map((event) => {
              return (
                <li><b>{event.title} : {event.date}.</b> {event.description}</li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Application;
