// eslint-disable-next-line
import reportWebVitals from './reportWebVitals';

import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import App from './App';
import TopNav from './components/Navigation/TopNav';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <header className="Header h-max sm:h-14 md:h-14 lg:h-14">
      <TopNav />
    </header>
    <section>
      <App />
    </section>
    <footer />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
