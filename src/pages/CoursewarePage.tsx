import React from 'react';
import style from './index.less';
import 'antd/dist/antd.css'

interface Iprops {
  location: string,
}

const Workspace: React.FC<Iprops> = (props) => {
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
