import React from 'react';
import style from './index.less';
import BasicLayout from '../../Layout/layout';
import 'antd/dist/antd.css'

const Workspace = (props) => {
  const { history } = props;

  const handleRouter = () => {
    history.push({ pathname: '/upload' });
  };

  return (
    <div className={style.main}>
      <BasicLayout>
        <span onClick={handleRouter}>123</span>
      </BasicLayout>
    </div>
  );
}

export default Workspace;
