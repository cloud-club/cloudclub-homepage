import React from 'react';

import MainPage from '../assets/contents/main/page.md';
import MainCoverImage from '../assets/contents/main/cover.png';
import Markdown from '../components/Markdown/Markdown';

function Main() {
  return (
    <Markdown contentsPath={MainPage} coverImagePath={MainCoverImage} />
  );
}

export default Main;
