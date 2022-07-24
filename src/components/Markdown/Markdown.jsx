import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import defaultCover from '../../assets/images/default-cover.jpeg';

/* eslint-disable react/no-children-prop */
function Markdown({ contentsFile, coverImageFile }) {
  const [contents, setContents] = useState('');
  const [coverImage, setCoverImage] = useState('');

  useEffect(() => {
    fetch(contentsFile)
      .then((res) => res.text())
      .then((rawData) => setContents(rawData));
    setCoverImage(coverImageFile);
  }, []);

  return (
    <section>
      <img className="CoverImage hidden w-full mb-20 object-cover max-h-96 sm:block md:block lg:block" src={coverImage || defaultCover} alt="cover" />
      <article className="prose prose-zinc flex max-w-full justify-center lg:prose-lg">
        <ReactMarkdown
          children={contents}
          remarkPlugins={[remarkGfm]}
          className="MarkdownContents w-3/4"
        />
      </article>
    </section>
  );
}

Markdown.propTypes = {
  contentsFile: PropTypes.string.isRequired,
  coverImageFile: PropTypes.string,
};

Markdown.defaultProps = {
  coverImageFile: '',
};

export default Markdown;
