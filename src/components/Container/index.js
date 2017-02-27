import React from 'react';

type propTypes = {
  children: React.Element,
};

const Container = (props: propTypes) => (
  <div>
    {props.children}
  </div>
);

export default Container;
