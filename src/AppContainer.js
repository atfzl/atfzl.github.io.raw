import React, { PropTypes } from 'react';

import './index.global.css';
import './highlight.global.css';

import ServerSideStyles from './components/ServerSideStyles';

const AppContainer = (props) => (
  <div>
    {props.children}
    <ServerSideStyles />
  </div>
);

AppContainer.propTypes = {
  children: PropTypes.node,
};

export default AppContainer;
