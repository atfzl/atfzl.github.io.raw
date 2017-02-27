import React from 'react';
import { BodyContainer } from 'phenomic';

import BackButton from '../../components/BackButton';

import s from './index.scss';

type propTypes = {
  head: {
    title: string,
    date: string,
  },
  body: string,
};

const Post = (props: propTypes) => (
  <div className={s.container}>
    <div className={s.innerContainer}>
      <h1 className={s.title}>{props.head.title}</h1>
      <span className={s.date}>{new Date(props.head.date).toDateString()}</span>
      <BodyContainer>
        {props.body}
      </BodyContainer>
    </div>
    <BackButton to="/posts" />
  </div>
);

export default Post;
