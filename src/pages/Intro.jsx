import React from 'react';

import IntroPage from '../assets/contents/intro/page.md';
import IngroCoverImage from '../assets/contents/intro/cover.png';
import Markdown from '../components/Markdown/Markdown';

function Intro() {
  return (
    <Markdown contentsFile={IntroPage} coverImageFile={IngroCoverImage} />
  );
}

export default Intro;
