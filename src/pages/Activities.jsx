import React from 'react';

import ActivitiesPage from '../assets/contents/activities/page.md';
import ActivitiesCoverImage from '../assets/contents/activities/cover.png';
import Markdown from '../components/Markdown/Markdown';

function Activities() {
  return (
    <Markdown contentsFile={ActivitiesPage} coverImageFile={ActivitiesCoverImage} />
  );
}

export default Activities;
