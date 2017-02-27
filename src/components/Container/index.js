import React from 'react';
import s from './index.scss';

type propTypes = {
  children: React.Element,
};

const Container = (props: propTypes) => (
  <div className={s.container}>
    {props.children}
  </div>
);

export default Container;
