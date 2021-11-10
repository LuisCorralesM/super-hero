import React from 'react';
import ReactDOM from 'react-dom';
import {AppSuperHero} from './container/AppSuperHero';

import { Provider } from "react-redux"
import {store} from './store/store'


// Estilos 
import './style/Main.css'

ReactDOM.render(
  <Provider store={store}>
    <AppSuperHero />
  </Provider>,
  document.getElementById('root')
);
