import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

const App = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
