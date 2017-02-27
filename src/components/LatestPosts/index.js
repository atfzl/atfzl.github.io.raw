import React, { PropTypes } from 'react';
import { Link } from 'phenomic';
import fp from 'lodash/fp';

import s from './index.scss';

const LatestPosts = (props, { collection }) => {
  const latestPosts = fp.compose(
    fp.reverse,
    fp.sortBy('date'),
    fp.filter({ layout: 'Post' }),
  )(collection);

  return (
    <div className={s.container}>
      {latestPosts.map(a => (
        <Link to={a.__url} className={s.row} key={a.title}>
          <div className={s.title}>
            {a.title}
          </div>
          <div className={s.date}>
            {new Date(a.date).toDateString()}
          </div>
        </Link>
       ))}
      <a href="#" className={s.circle}>
        <div className={s.back} />
      </a>
    </div>
  );
};

LatestPosts.contextTypes = {
  collection: PropTypes.array.isRequired,
};

export default LatestPosts;
