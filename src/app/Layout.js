import React from 'react';

import Navbar from '../components/navbar/Navbar';

function Layout(props) {
  // const children = props.children;
  return (
    <React.Fragment>
      <Navbar />
      {props.children}
    </React.Fragment>
  );
}

export default Layout;
