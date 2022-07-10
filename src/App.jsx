import React from 'react';
// import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopNav from './components/Navigation/TopNav';
import Main from './pages/Main';
import Activities from './pages/Activities';
import Intro from './pages/Intro';
import Plan from './pages/Plan';
import Apply from './pages/Apply';

// import structurePath from './assets/contents/structure.yaml';
/* eslint-disable import/extensions */
import structureJson from './assets/contents/structure';

const jsonData = JSON.stringify(structureJson);
const { pages } = JSON.parse(jsonData);
// console.log(pages);

function App() {
  return (
    <section className="MainSection sm:block">
      <Router>
        <header className="Header inline-block sticky h-max w-full top-0 sm:h-14 md:h-14 lg:h-14">
          <TopNav menuList={pages} />
        </header>
        <section>
          <Routes>
            <Route path="cloudclub-homepage" element={<Main />} />
            <Route path="intro" element={<Intro />} />
            <Route path="activities" element={<Activities />} />
            <Route path="plan" element={<Plan />} />
            <Route path="apply" element={<Apply />} />
          </Routes>
        </section>
        <footer />
      </Router>
    </section>
  );
}

export default App;
