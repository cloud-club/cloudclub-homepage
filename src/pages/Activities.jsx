import React from 'react';

import ActivitiesPage from '../assets/contents/activities/page.md';
import ActivitiesCoverImage from '../assets/contents/activities/cover.png';
import contentsImage1 from '../assets/contents/activities/Untitled.png';
import Markdown from '../components/Markdown/Markdown';

function Activities() {
  const contentsImages = {
    'Untitled.png': contentsImage1,
  };
  return (
    <Markdown
      contentsFile={ActivitiesPage}
      coverImageFile={ActivitiesCoverImage}
      contentsImages={contentsImages}
    />
  );
}

export default Activities;
