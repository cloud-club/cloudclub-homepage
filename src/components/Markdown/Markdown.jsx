import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import defaultCover from '../../assets/images/default-cover.jpeg';

/* eslint-disable react/no-children-prop */
function Markdown({
  contentsFile, coverImageFile, contentsImages,
}) {
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
          components={{
            /* eslint-disable react/no-unstable-nested-components */
            /* eslint react/prop-types: 0 */
            img({ node, ...props }) {
              let convertSrc = props.src;
              const temp = convertSrc.split('/');
              convertSrc = temp[temp.length - 1];
              return (
                <img
                  src={contentsImages[convertSrc] ? contentsImages[convertSrc] : 'test'}
                  alt={props.alt}
                />
              );
            },
          }}
        />
      </article>
    </section>
  );
}

Markdown.propTypes = {
  contentsFile: PropTypes.string.isRequired,
  coverImageFile: PropTypes.string,
  contentsImages: PropTypes.arrayOf(String),
};

Markdown.defaultProps = {
  coverImageFile: '',
  contentsImages: '',
};

export default Markdown;
