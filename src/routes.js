import React from 'react';
import { Route } from 'react-router';
import { PageContainer as PhenomicPageContainer } from 'phenomic';

import AppContainer from './AppContainer';
import PageError from './layouts/PageError';
import Homepage from './layouts/Homepage';

const PageContainer = props => (
  <PhenomicPageContainer
    {...props}
    layouts={{
      PageError,
      Homepage,
    }}
  />
);

export default (
  <Route component={AppContainer}>
    <Route path="*" component={PageContainer} />
  </Route>
);
