import React from 'react';
import cx from 'classnames';
import { Link } from 'phenomic';

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
    <div className={s.links}>
      <a href="https://github.com/atfzl">Github</a>
      <Link to="/blog">Blog</Link>
      <a href="https://linkedin.com/in/atfzl">Linkedin</a>
      <a href="https://twitter.com/atfzl">Twitter</a>
    </div>
  </div>
);
