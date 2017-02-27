import React from 'react';
import { Link } from 'phenomic';

import s from './index.scss';

const BackButton = () => (
  <Link
    to=".."
    className={s.circle}
  >
    <span className={s.back} />
  </Link>
);

export default BackButton;
