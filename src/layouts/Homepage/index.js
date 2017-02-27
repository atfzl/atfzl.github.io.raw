import React from 'react';
import Helmet from 'react-helmet';

import s from './index.scss';

import HomePageHeader from '../../components/HomePageHeader';

const Homepage = () => (
  <main className={s.container}>
    <Helmet
      title="Atif Afzal"
    />
    <HomePageHeader />
  </main>
);

export default Homepage;
