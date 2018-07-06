import React from 'react';
import { Layout } from 'antd';
import Header from '../components/layout/header';
import Footer from '../components/layout/footer';

class App extends React.Component {
  render() {
    const height = window.innerHeight;
    return (
      <Layout>
        <Layout.Header style={{ background: 'white', height: 71 }}>
          <Header />
        </Layout.Header>
        <Layout style={{ background: 'white', minHeight: height - 70 - 90 }} id="main-container">
          {
          this.props.children
          }
        </Layout>
        <Layout.Footer>
          <Footer />
        </Layout.Footer>
      </Layout>
    );
  }
}

export default App;
