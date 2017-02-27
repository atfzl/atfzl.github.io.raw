import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import { BodyContainer, joinUri } from 'phenomic';

import BackButton from '../../components/BackButton';

import s from './index.scss';

type propTypes = {
  __url: string,
  head: {
    title: string,
    date: string,
    metaTitle?: string,
  },
  body: string,
};

const Post = (props: propTypes, context) => {
  const {
    head,
    body,
    __url,
  } = props;

  const { metadata: { pkg } } = context;

  const metaTitle = head.metaTitle ? head.metaTitle : head.title;

  const meta = [
    { property: 'og:type', content: 'article' },
    { property: 'og:title', content: metaTitle },
    {
      property: 'og:url',
      content: joinUri(process.env.PHENOMIC_USER_URL, __url),
    },
    { property: 'og:description', content: head.description },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: metaTitle },
    { name: 'twitter:creator', content: `@${pkg.twitter}` },
    { name: 'twitter:description', content: head.description },
    { name: 'description', content: head.description },
  ];

  return (
    <div className={s.container}>
      <Helmet
        title={metaTitle}
        meta={meta}
      />
      <div className={s.innerContainer}>
        <h1 className={s.title}>{head.title}</h1>
        <span className={s.date}>{new Date(head.date).toDateString()}</span>
        <BodyContainer>
          {body}
        </BodyContainer>
      </div>
      <BackButton to="/posts" />
    </div>
  );
};

Post.contextTypes = {
  metadata: PropTypes.object.isRequired,
};

export default Post;
