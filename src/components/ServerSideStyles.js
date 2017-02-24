import React from 'react';
import Helmet from 'react-helmet';
import styleSheet from 'styled-components/lib/models/StyleSheet';

const ServerSideStyles = () => {
  const styles = styleSheet.rules().map(rule => rule.cssText).join('\n');

  if (typeof window !== 'undefined') {
    return null;
  }

  return (
    <Helmet
      style={[
        { type: 'text/css', cssText: styles },
      ]}
    />
  );
};

export default ServerSideStyles;
