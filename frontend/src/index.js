import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './Header/Header'
import BodySite from './Body/Body';
// import Climate from './Body/Climate';
import MyBody from './Body/Body';

//TODO: it is shows in above all of tags
ReactDOM.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>,
  document.body.appendChild(document.createElement('header'))
);

ReactDOM.render(
  <React.StrictMode>
    <BodySite />
  </React.StrictMode>,
  document.getElementById('root')
);

// ReactDOM.render(
//   <React.StrictMode>
//     <Climate />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// ReactDOM.render(
//   <React.StrictMode>
//     <BodySite />
//   </React.StrictMode>,
//   document.body.appendChild(document.createElement('div'))
// );

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('body')
// );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
