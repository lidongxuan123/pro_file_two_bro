import React from 'react';
import style from './index.less';
import 'antd/dist/antd.css'

const Workspace = (props) => {
  const { history } = props;

  const handleRouter = () => {
    history.push({ pathname: '/upload' });
  };

  return (
    <div className={style.main}>
      <span onClick={handleRouter}>123</span>
    </div>
  );
}

export default Workspace;
