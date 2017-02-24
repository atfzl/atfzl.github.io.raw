import React from 'react';
import s from './index.scss';

import HomePageHeader from '../../components/HomePageHeader';

const Homepage = () => (
  <div className={s.container}>
    <HomePageHeader className={s.header} />
  </div>
);

export default Homepage;
