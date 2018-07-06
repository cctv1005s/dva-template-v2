import React from 'react';
import { Link } from 'dva/router';
import _ from 'lodash';
import { Menu, Dropdown, Icon } from 'antd';
import styles from './header.less';
import { user as getUser } from '../../utils/user';

const menu = (
  <Menu>
    <Menu.Item>
      <Link to="/login">登出</Link>
    </Menu.Item>
  </Menu>
);

class Header extends React.Component {
  constructor(p) {
    super(p);
    this.state = {
      showBanner: false,
      showMenu: false,
      user: null,
    };
  }

  render() {
    const {
      user,
    } = this.state;
    const role = _.get(user, 'role');
    return (
      <div className={styles.header} >
        <div style={{ float: 'left' }}>
          <Link to={role === 'admin' ? '/task' : '/examine'}>
            <b style={{ color: 'black', fontSize: 17, paddingLeft: 15 }}>
              通用Dva模板
            </b>
          </Link>
        </div>
        <div className={styles.user}>
          <Dropdown overlay={menu}>
            <a>
              {
                _.get(user, 'username')
              } &nbsp;<Icon type="down" />
            </a>
          </Dropdown>
        </div>
      </div>
    );
  }
}

export default Header;
