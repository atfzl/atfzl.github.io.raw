import React, { PropTypes } from 'react';

import './index.global.css';
import './highlight.global.css';

import GoogleAnalyticsTracker from './components/GoogleAnalyticsTracker';
import Container from './components/Container';
import DefaultHeadMeta from './components/DefaultHeadMeta';

const AppContainer = props => (
  <GoogleAnalyticsTracker params={props.params}>
    <Container>
      <DefaultHeadMeta />
      {props.children}
    </Container>
  </GoogleAnalyticsTracker>
);

AppContainer.propTypes = {
  children: PropTypes.node.isRequired,
  params: PropTypes.object.isRequired,
};

export default AppContainer;
