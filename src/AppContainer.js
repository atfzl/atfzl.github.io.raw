import { PropTypes } from 'react';

import './index.global.css';
import './highlight.global.css';

const AppContainer = props => (
  props.children
);

AppContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppContainer;
