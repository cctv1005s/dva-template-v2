import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva';
import { Button, Row, Form, Input } from 'antd';
import { routerRedux } from 'dva/router';
import styles from './index.less';
// import { setUser } from '../../utils/user';

// 引入logo
import LOGO from '../../assets/logo.png';

const FormItem = Form.Item;

const Login = ({
  loading,
  dispatch,
  form: {
    getFieldDecorator,
    validateFieldsAndScroll,
    getFieldsValue,
  },
}) => {
  function handleOk() {
    validateFieldsAndScroll((errors) => {
      if (errors) {
        return;
      }
      const value = getFieldsValue();
      const pathname = '/index';
      window.localStorage.login = true;
      if (value) {
        dispatch(routerRedux.push({
          pathname,
        }));
      }
    });
  }

  return (
    <div className={styles.form}>
      <div className={styles.logo}>
        <img alt="logo" src={LOGO} />
        <span>dva通用模板</span>
      </div>
      <form>
        <FormItem hasFeedback>
          {getFieldDecorator('username', {
            rules: [
              {
                required: true,
                message: '用户名不能为空',
              },
            ],
          })(<Input maxLength="20" onPressEnter={handleOk} placeholder="Username" />)}
        </FormItem>
        <FormItem hasFeedback>
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: '密码不能为空',
              },
            ],
          })(<Input maxLength="20" type="password" onPressEnter={handleOk} placeholder="Password" />)}
        </FormItem>
        <Row>
          <Button type="primary" onClick={handleOk} loading={loading.effects.login}>
            登录
          </Button>
        </Row>
      </form>
    </div>
  );
};

Login.propTypes = {
  form: PropTypes.object,
  dispatch: PropTypes.func,
  loading: PropTypes.object,
};

export default connect(({ loading }) => ({ loading }))(Form.create()(Login));
