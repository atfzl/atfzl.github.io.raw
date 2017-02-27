import React from 'react';
import Helmet from 'react-helmet';

import LatestPosts from '../../components/LatestPosts';
import BackButton from '../../components/BackButton';

import s from './index.scss';

const Blog = () => (
  <div className={s.container}>
    <Helmet
      title="Blog: Atif Afzal"
    />
    <h1>Posts</h1>
    <LatestPosts />
    <BackButton to="/" />
  </div>
);

export default Blog;
