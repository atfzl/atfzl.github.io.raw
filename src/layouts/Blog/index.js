import React from 'react';

import LatestPosts from '../../components/LatestPosts';
import BackButton from '../../components/BackButton';

import s from './index.scss';

const Blog = () => (
  <div className={s.container}>
    <h1>Posts</h1>
    <LatestPosts />
    <BackButton to="/" />
  </div>
);

export default Blog;
