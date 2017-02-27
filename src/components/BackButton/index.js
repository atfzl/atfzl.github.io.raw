import React from 'react';
import { Link } from 'phenomic';

import s from './index.scss';

type propTypes = {
  to: string,
};

const BackButton = (props: propTypes) => (
  <Link
    to={props.to}
    className={s.circle}
  >
    <span className={s.back} />
  </Link>
);

export default BackButton;
