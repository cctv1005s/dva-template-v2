import React from 'react';
import Working from '../../assets/working.jpg';

class ErrorPage extends React.Component {
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h2 style={{ marginTop: 30 }}>开发中</h2>
        <img src={Working} style={{ height: 500 }} alt="施工中" />
      </div>
    );
  }
}

export default ErrorPage;
