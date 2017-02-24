import React from 'react';
import cx from 'classnames';
import { Link } from 'phenomic';
import { Motion, spring } from 'react-motion';

import s from './index.scss';

type propTypes = {
  className: string,
};

export default (props: propTypes) => (
  <div className={cx(props.className, s.container)}>
    <div className={s.logoContainer}>
      <h1 className={s.logo}>
        atfzl
      </h1>
      <div className={s.name}>
        Atif Afzal
      </div>
    </div>
    <Motion
      defaultStyle={{ v: 400 }}
      style={{ v: spring(0, { stiffness: 120, damping: 15 }) }}
    >
      {styl =>
        <div
          className={s.links}
          style={{ transform: `translate(${styl.v}px)` }}
        >
          <a href="https://github.com/atfzl">Github</a>
          <Link to="/blog">Blog</Link>
          <a href="https://linkedin.com/in/atfzl">Linkedin</a>
          <a href="https://twitter.com/atfzl">Twitter</a>
        </div>
      }
    </Motion>
  </div>
);
