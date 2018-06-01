import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import Home from './home';
import Application from './application';
import Results from './results';
import Resources from './resources';
import Announcements from './announcements';
import Contact from './contact';

class AppRouter extends Component {
  render() {
    return (
      <div className="page-wrapper">
        <Header />
        <Switch>
          <Route path='/material' component={Resources} exact />
          <Route path='/convocatoria' component={Application} />
          <Route path='/resultados' component={Results} />
          <Route path='/anuncios' component={Announcements} />
          <Route path='/contacto' component={Contact} />
          <Route path='/' component={Home} exact />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default AppRouter;
