import React from 'react';

import PlanPage from '../assets/contents/plan/page.md';
import PlanCoverImage from '../assets/contents/plan/cover.png';
import Markdown from '../components/Markdown/Markdown';

function Plan() {
  return (
    <Markdown contentsFile={PlanPage} coverImageFile={PlanCoverImage} />
  );
}

export default Plan;
