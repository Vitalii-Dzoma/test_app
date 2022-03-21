import React from 'react';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Audio } from 'react-loader-spinner';

class Loader extends React.Component {
  render() {
    return (
      <Audio
        height="100"
        width="100"
        color="grey"
        ariaLabel="loading"
        margin="0 auto"
      />
    );
  }
}

export default Loader;
