import React from 'react';

import ApplyPage from '../assets/contents/apply/page.md';
import ApplyCoverImage from '../assets/contents/apply/cover.png';
import Markdown from '../components/Markdown/Markdown';

function Apply() {
  return (
    <Markdown contentsFile={ApplyPage} coverImageFile={ApplyCoverImage} />
  );
}

export default Apply;
