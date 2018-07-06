import React from 'react';
import { connect } from 'dva';
import styles from './index.less';

class Index extends React.Component {

  render() {
    return (
      <div
        className={styles.container}
      >
        index
      </div>
    );
  }
}

export default connect(state => (state))(Index);
