// import React from 'react';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopNav from './components/Navigation/TopNav';
import ScrollTracer from './components/Scroll/Tracer';
import Main from './pages/Main';
import Activities from './pages/Activities';
import Intro from './pages/Intro';
import Plan from './pages/Plan';
import Apply from './pages/Apply';

import structureJson from './assets/contents/structure.json';

const jsonData = JSON.stringify(structureJson);
const { pages } = JSON.parse(jsonData);
const channelTalkImageHeight = 56;
const channelTalkImageMargin = 14;

function getUrl(name) {
  const matched = pages.filter((value) => value.title === name);
  return matched[0].url;
}

function App() {
  const [pageHeight, setPageHeight] = useState(0);

  useEffect(() => {
    setPageHeight(window.innerHeight - channelTalkImageHeight - channelTalkImageMargin);
  }, []);

  return (
    <section className="MainSection sm:block">
      <Router>
        <header className="Header inline-block sticky h-max w-full top-0 sm:h-14 md:h-14 lg:h-14">
          <TopNav menuList={pages} />
          <ScrollTracer />
        </header>
        <section>
          <Routes>
            <Route path={getUrl('Main')} element={<Main />} />
            <Route path={getUrl('Intro')} element={<Intro />} />
            <Route path={getUrl('Activities')} element={<Activities />} />
            <Route path={getUrl('Plan')} element={<Plan />} />
            <Route path={getUrl('Apply')} element={<Apply />} />
          </Routes>
        </section>
        <footer>
          <div
            className="ChannelTalk fixed flex justify-end w-full h-fit top-full"
            style={{ top: `${pageHeight}px`, right: '10px' }}
          >
            <a className="ChannelTalkLink w-fit h-full" href="https://pf.kakao.com/_dNugb" target="_blank" rel="noreferrer">
              <img className="ChannelTalkImage w-14 h-14" src="data:image/png;base64,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" alt="채널톡" />
            </a>
          </div>
        </footer>
      </Router>
    </section>
  );
}

export default App;
