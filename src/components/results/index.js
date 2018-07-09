import React, { Component } from 'react';

import goldMedal from '../../gold_medal.png';
import silverMedal from '../../silver_medal.png';
import bronzeMedal from '../../bronze_medal.png';

class Results extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [
        {
          year: 2018,
          sede: 'CDMX',
          omiTeamMembers: [
            {
              name: 'José Manuel Ramos Gutierrez',
              omiLabel: 'ROO-1',
              medal: '',
              school: 'Bachilleres Cancún',
            },
            {
              name: 'Marco Antonio Alfaro Baruch',
              omiLabel: 'ROO-2',
              medal: '',
              school: 'CONALEP Canún II',
            },
            {
              name: 'Nestor Rodriguez Salgado',
              omiLabel: 'ROO-3',
              medal: '',
              school: 'Bachilleres Cancún II',
            },
            {
              name: 'Angel Santiago Delgado Mendoza',
              omiLabel: 'ROO-4',
              medal: 'bronze',
              school: 'Bachilleres Cancún II',
            },
          ],
          leader: 'Gener Gaudencio Ku Pech',
          asesors: [
            'Joel Alejandro Cauich Carrillo',
            'Juan Manuel Ucan Cih',
            'Nelly Liliana Corona Méndez',
          ],
          default: true,
        },
        {
          year: 2017,
          sede: 'Querétaro',
          omiTeamMembers: [
            {
              name: 'Leonardo Daniel Ventimilla Salinas',
              omiLabel: 'ROO-1',
              medal: 'bronze',
              school: 'Bachilleres Cancún',
            },
            {
              name: 'Joel Alejandro Cauich Carrillo',
              omiLabel: 'ROO-2',
              medal: '',
              school: 'Bachilleres Cancún II',
            },
            {
              name: 'Jasson Perez Garcia',
              omiLabel: 'ROO-3',
              medal: '',
              school: 'CONALEP Cancún II',
            },
            {
              name: 'Axel Alexis Montejo Lopez',
              omiLabel: 'ROO-4',
              medal: '',
              school: 'CONALEP Cancún II',
            },
          ],
          leader: 'Gener Gaudencio Ku Pech',
          asesors: [
            'Moisés Barrera Keb',
            'Martin Javier Ayala Miranda',
            'Román Miguel Briceño Dzib',
            'Nelly Liliana Corona Méndez',
          ],
        },
        {
          year: 2016,
          sede: 'Veracruz',
          omiTeamMembers: [
            {
              name: 'Ricardo Sinai Vargas Kumul',
              omiLabel: 'ROO-1',
              medal: 'bronze',
              school: 'Bachilleres Cancún',
            },
            {
              name: 'Carlos Manuel Galindo Celis',
              omiLabel: 'ROO-2',
              medal: 'bronze',
              school: 'Bachilleres Cancún',
            },
            {
              name: 'Juan Wilbert Barrera Keb',
              omiLabel: 'ROO-3',
              medal: '',
              school: 'Escuela Secundaria General #19 - Benito Juárez',
            },
            {
              name: 'Zeus Jhonathan Sarmiento Serrano',
              omiLabel: 'ROO-4',
              medal: 'bronze',
              school: 'Bachilleres Cancún',
            },
          ],
          leader: 'Gener Gaudencio Ku Pech',
          asesors: [
            'Jonathan Peraza Feliciano',
            'Nelly Liliana Corona Méndez',
          ],
        },
        {
          year: 2015,
          sede: 'Chihuahua',
          omiTeamMembers: [
            {
              name: 'Ricardo Sinai Vargas Kumul',
              omiLabel: 'ROO-1',
              medal: 'bronze',
              school: 'Bachilleres Cancún',
            },
            {
              name: 'Angela Cristina Rábago Varguez',
              omiLabel: 'ROO-2',
              medal: '',
              school: 'Bachilleres Cancún',
            },
            {
              name: 'José Luis Ochoa Monroy',
              omiLabel: 'ROO-3',
              medal: 'bronze',
              school: 'Bachilleres Cancún',
            },
          ],
          leader: 'Nelly Liliana Corona Méndez',
        },
        {
          year: 2014,
          sede: 'Pachuca',
          omiTeamMembers: [
            {
              name: 'José Luis Ochoa Monroy',
              omiLabel: 'ROO-1',
              medal: 'bronze',
              school: 'Bachilleres Cancún',
            },
            {
              name: 'Juan Wilbert Barrera Keb',
              omiLabel: 'ROO-2',
              medal: '',
              school: 'Escuela Secundaria General #19 - Benito Juárez',
            },
            {
              name: 'Luis Gomez Ordoñez',
              omiLabel: 'ROO-3',
              medal: '',
              school: 'CECYTE Cancún III',
            },
            {
              name: 'Rafael Yah Koh',
              omiLabel: 'ROO-4',
              medal: '',
              school: 'CECYTE Cancún III',
            },
          ],
          leader: 'Pablo Batun Salazar',
          asesors: [
            'Gumercindo Melchor Baeza Baak',
          ],
        },
        {
          year: 2013,
          sede: 'Toluca',
          omiTeamMembers: [
            {
              name: 'Moisés Barrera Keb',
              omiLabel: 'ROO-1',
              medal: 'silver',
              school: 'CECYTE Cancún III',
            },
            {
              name: 'Daniela Monserrat Ceballos Zavala',
              omiLabel: 'ROO-2',
              medal: 'silver',
              school: 'Bachilleres Chetumal',
            },
            {
              name: 'Mario Alejandro Mixtega Pacheco',
              omiLabel: 'ROO-3',
              medal: 'bronze',
              school: 'Bachilleres Cancún',
            },
            {
              name: 'Miguel Ángel Benítez Medina',
              omiLabel: 'ROO-4',
              medal: '',
              school: 'CECYTE Cancún III',
            },
          ],
          leader: 'Pablo Batun Salazar',
          asesors: [
            'María del Socorro Chan Canché',
            'José Leonardo Cámara Castillo',
            'David Alejandro Ake Rosado',
          ],
        },
        {
          year: 2012,
          sede: 'Sonora',
          omiTeamMembers: [
            {
              name: 'Daniela Monserrat Ceballos Zavala',
              omiLabel: 'QIR-2',
              medal: 'silver',
              school: 'Bachilleres Chetumal',
            },
            {
              name: 'Tomas Carrillo Acevedo',
              omiLabel: 'QIR-3',
              medal: 'bronze',
              school: 'CECYTE Cancún III',
            },
            {
              name: 'Moisés Barrera Keb',
              omiLabel: 'QIR-4',
              medal: 'silver',
              school: 'CECYTE Cancún III',
            },
          ],
          leader: 'Pablo Batun Salazar',
          asesors: [
            'María del Socorro Chan Canché',
            'José Leonardo Cámara Castillo',
            'David Alejandro Ake Rosado',
          ],
        },
        {
          year: 2011,
          sede: 'Cuernavaca',
          omiTeamMembers: [
            {
              name: 'Daniela Monserrat Ceballos Zavala',
              omiLabel: 'QIR-1',
              medal: 'silver',
              school: 'Bachilleres Chetumal',
            },
            {
              name: 'Cristian Alan Chávez Valencia',
              omiLabel: 'QIR-4',
              medal: 'silver',
              school: '',
            },
          ],
          leader: 'Pablo Batun Salazar',
        },
      ],
      currentDelegation: [],
    };
  }

  componentWillMount() {
    const { results } = this.state;
    this.setState({ currentDelegation: results[0] });
  }

  getMedalImage(type) {
    if (type === 'gold') return goldMedal;
    if (type === 'silver') return silverMedal;

    return bronzeMedal;
  }

  handleOnChange = (event) => {
    if (!event.target.value) {
      return this.setState({ currentDelegation: [] });
    }

    const delegation = this.state.results.find(item => item.year == event.target.value); // eslint-disable-line

    return this.setState({ currentDelegation: delegation });
  }

  renderOtherTeachers() {
    const { currentDelegation } = this.state;
    if (!currentDelegation.asesors) {
      return '';
    }

    return (
      <div>
        <h4>Asesores</h4>

        <ul className='list-group'>
          {currentDelegation.asesors.map((teacher) => {
            return <li className='list-group-item' key={teacher}>{teacher}</li>;
          })}
        </ul>
      </div>
    );
  }

  renderResults() {
    const { currentDelegation } = this.state;

    if (currentDelegation.length === 0) {
      return <h3>Para ver los registros de la delegación seleccione el año.</h3>;
    }

    return (
      <div className='card'>
        <div className='card-header'>
          OMI {currentDelegation.year} - {currentDelegation.sede}
        </div>
        <div className='card-body'>
          <h4>Líder de la Delegación: {currentDelegation.leader}</h4>

          <table className='table'>
            <thead>
              <tr>
                <th scope='col'>ID</th>
                <th scope='col'>Medalla</th>
                <th scope='col'>Participante</th>
                <th scope='col'>Escuela</th>
              </tr>
            </thead>
            <tbody>
              {currentDelegation.omiTeamMembers.map((student) => {
                return (
                  <tr key={student.name}>
                    <td>{student.omiLabel}</td>
                    <td>{student.medal ? <img className='card-img-bottom contestant-medal-image' src={this.getMedalImage(student.medal)} alt={student.medal} /> : ''}</td>
                    <td>{student.name}</td>
                    <td>{student.school}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {this.renderOtherTeachers()}
        </div>
      </div>
    );
  }

  renderOptions() {
    const { results } = this.state;

    const options = results.map((item) => {
      return <option value={item.year} key={item.year}>{item.year}</option>;
    });

    return options;
  }

  render() {
    return (
      <div className='page-content'>
        <div className='container'>
          <h1>Resultados de la Delegación</h1>
          <div className='form-group'>
            <label>
              Selecciona el año
            </label>
            <select
              className='form-control'
              onChange={this.handleOnChange}
            >
              {/* <option value=''>Selecciona el año</option> */}
              {this.renderOptions()}
            </select>
          </div>
          {this.renderResults()}
        </div>
      </div>
    );
  }
}

export default Results;
