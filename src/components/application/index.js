import React, { Component } from 'react';
import convocatoria from '../../Convocatoria2018.jpg';

class Application extends Component {
  constructor(props) {
    super(props);

    this.state = {
      omiEvents: [
        { title: 'Examen Selectivo por Internet', date: '1ro de Noviembre de 2018', description: 'Primer examen selectivo por internet. Incluye temas de pensamiento lógico matemático.'},
        { title: 'Ipsum commodo ad reprehenderit voluptate.', date: '1ro de Noviembre de 2018', description: 'Id fugiat exercitation elit ad veniam enim nisi.'},
        { title: 'Voluptate sint Lorem Lorem magna deserunt voluptate adipisicing.', date: '1ro de Noviembre de 2018', description: 'Aute mollit consectetur culpa tempor cillum non sint sint et ipsum eiusmod culpa tempor proident.'},
        { title: 'Ut culpa officia laboris sunt duis amet esse do incididunt consectetur laboris velit qui.', date: '1ro de Noviembre de 2018', description: 'Labore reprehenderit irure commodo adipisicing.'},
        { title: 'Cillum ad cillum laborum culpa deserunt.', date: '1ro de Noviembre de 2018', description: 'Ad mollit dolor minim fugiat esse in duis velit minim dolor.'}
      ]
    }
  }
  render() {
    const { omiEvents } = this.state;

    return (
      <div className='page-content'>
        <div className='container'>
          <h1>Convocatoria OMI Q-ROO 2018</h1>
          <div>Ad ad enim sint ex irure officia aliquip consectetur nulla officia voluptate veniam amet. Ipsum elit exercitation elit cillum cupidatat. Reprehenderit eu eiusmod et enim quis proident consectetur nostrud eu ut laboris est consectetur. Ea enim nostrud non qui cupidatat do. Duis mollit labore pariatur anim. Fugiat anim est voluptate qui pariatur ullamco magna. Do irure minim tempor et voluptate sint quis eiusmod irure laborum magna id dolor elit.</div>
          
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
