import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';

import './index.global.css';
import './highlight.global.css';

import ServerSideStyles from './components/ServerSideStyles';
import typography from './typography';

const AppContainer = props => (
  <div>
    <Helmet
      style={[{ cssText: typography.toString() }]}
    />
    {props.children}
    <ServerSideStyles />
  </div>
);

AppContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppContainer;
