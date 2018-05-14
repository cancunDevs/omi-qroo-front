import React, { Component } from 'react';
import { programmingCourses, karelCourses } from '../../api/courses';
import './index.scss';

class Resources extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: true, // 1: OMI - 0: OMIPS
      title: 'Material de Estudio',
      description: `En esta sección encontraras material relacionado a la OMI separado en distintas secciones para que puedas
      practicar a tu propio ritmo y acorde a tus necesidades. Para seleccionar tu temario adecuado selecciona el temario que
      desees revisar en los botones de abajo`,
    };
  }

  handleClick(selectedPage) {
    const { currentPage } = this.state;
    if (selectedPage !== currentPage) {
      this.setState({ currentPage: !currentPage });
    }
  }

  renderSelectResources() {
    const { currentPage } = this.state;
    return (
      <ul className='nav nav-pills mb-3'>
        <li className='nav-item'>
          <button
            className={currentPage ? 'nav-link active' : 'nav-link'}
            onClick={() => { this.handleClick(true); }}
          >
            OMI
          </button>
        </li>
        <li className='nav-item'>
          <button
            className={!currentPage ? 'nav-link active' : 'nav-link'}
            onClick={() => { this.handleClick(false); }}
          >
            OMIPS
          </button>
        </li>
      </ul>
    );
  }

  renderOMIResources() {
    return (
      <div className='container'>
        <h2>Curso COMI para la Olimpiada Mexicana de Informática</h2>
        <table className='table course-list'>
          <thead>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Temario</th>
              <th scope='col'>Descripción</th>
              <th scope='col'>Material Adicional</th>
            </tr>
          </thead>
          <tbody>
            {programmingCourses.map((topic, index) => {
              return (
                <tr>
                  <th scope='row'>{index + 1}</th>
                  <td><a href={topic.url} target='_blank'>{topic.name}</a></td>
                  <td>
                    {topic.description}
                  </td>
                  <td>{topic.resourceURL ? <a href={topic.resourceURL}>Descargar</a> : 'NA'}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }

  renderOMIPSResources() {
    return (
      <div className='container'>
        <h2>Curso TeamCancun - Karel el Robot</h2>
        <table className='table course-list'>
          <thead>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Temario</th>
              <th scope='col'>Descripción</th>
              <th scope='col'>Material Adicional</th>
            </tr>
          </thead>
          <tbody>
            {karelCourses.map((topic, index) => {
              return (
                <tr>
                  <th scope='row'>{index + 1}</th>
                  <td><a href={topic.url} target='_blank'>{topic.name}</a></td>
                  <td>
                    {topic.description}
                  </td>
                  <td>{topic.resourceURL ? <a href={topic.resourceURL}>Descargar</a> : 'NA'}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }

  render() {
    const { currentPage, title, description } = this.state;

    return (
      <div className='page'>
        <div className='container-fluid'>
          <h1>{title}</h1>
          <p className='lead'>
            {description}
          </p>
        </div>

        {this.renderSelectResources()}

        {currentPage ? this.renderOMIResources() : this.renderOMIPSResources() }
      </div>
    );
  }
}

export default Resources;
