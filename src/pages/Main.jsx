import React from 'react';

import MainPage from '../assets/contents/main/page.md';
import MainCoverImage from '../assets/contents/main/cover.png';
import contentsImage1 from '../assets/contents/main/contentsImage1.png';
import contentsImage2 from '../assets/contents/main/contentsImage2.png';
import Markdown from '../components/Markdown/Markdown';

function Main() {
  const contentsImages = {
    'contentsImage1.png': contentsImage1,
    'contentsImage2.png': contentsImage2,
  };
  return (
    <Markdown
      contentsFile={MainPage}
      coverImageFile={MainCoverImage}
      contentsImages={contentsImages}
    />
  );
}

export default Main;
