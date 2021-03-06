import React from 'react';
import { Route } from 'react-router';
import { PageContainer as PhenomicPageContainer } from 'phenomic';

import AppContainer from './AppContainer';
import PageError from './layouts/PageError';
import Homepage from './layouts/Homepage';
import Blog from './layouts/Blog';
import Post from './layouts/Post';

const PageContainer = props => (
  <PhenomicPageContainer
    {...props}
    layouts={{
      PageError,
      Homepage,
      Blog,
      Post,
    }}
  />
);

export default (
  <Route component={AppContainer}>
    <Route path="*" component={PageContainer} />
  </Route>
);
