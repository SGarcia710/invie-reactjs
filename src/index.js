import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Invie from './Invie';
import * as serviceWorker from './serviceWorker';

import logoPortada from './images/invie.png';
import acustica from './images/invie-acustica.png';
import classic from './images/invie-classic.png';

//npm install cheet.js
import cheet from 'cheet.js';

//Redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';




const initialState = {
  menu: [
    {
        href: 'index.html',
        title: 'Home'
    },
    {
        href: '#guitarras',
        title: 'Guitarras'
    },
    {
        href: 'precios.html',
        title: 'Precios'
    },
    // {
    //     href: 'hola.html',
    //     title: 'Dont Click me.'
    // }
  ],
  logoPortada: logoPortada,
  guitarras: [
    {
      image: acustica,
      alt: 'Guitarra Invie Acustica',
      name: 'Invie Acustica',
      features: [
          'Estilo vintage',
          'Madera pura',
          'Incluye estuche invisible de aluminio',
      ]
    },
    {
      image: classic,
      alt: 'Guitarra Invie Clasica',
      name: 'Invie Clasica',
      features: [
          'Estilo vintage',
          'Liviana',
          'Empieza tu camino como rockstar',
      ]
    }
  ]
}

function reducer(state, action) {
  switch(action.type){
    case 'UPDATE_PROPS':{
      const newProps = action.payload.props;
      return {...state, ...newProps}
    }
    default:
      return state;
  }
}

const store = createStore(reducer, initialState);

const easter = {
  menu: [
    {
        href: 'index.html',
        title: 'Home'
    },
  ],
}

cheet('s e b', () =>{
  store.dispatch({
    //se envian los cambios
    type:'UPDATE_PROPS',
    payload: {
      //nuevas propiedades
      props: easter
    }
  })
  // console.log('hola');
});

cheet('g o b a c k', () =>{
  store.dispatch({
    //se envian los cambios
    type:'UPDATE_PROPS',
    payload: {
      //nuevas propiedades
      props: initialState
    }
  })
  // console.log('adios');
});

ReactDOM.render(
  <Provider store={store}>
   <Invie /> 
  </Provider>,
document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
