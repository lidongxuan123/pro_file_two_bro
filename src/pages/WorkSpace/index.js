import React from 'react';
import style from './index.less';
import { DatePicker, Button } from 'antd';
import 'antd/dist/antd.css'

const Workspace = () => {
  return (
    <div className={style.app}>
      <div className={style.menu}>
        <ul className={style.menu_ui}>
          <li>资料管理</li>
          <li>学生管理</li>
          <li>课程安排</li>
        </ul>
      </div>
      <div className={style.content_flex}>
        <div className={style.content_flex_left}></div>
        <div className={style.content_flex_right}>
          <DatePicker />
          <Button type="primary">btn</Button>
        </div>
      </div>
    </div>
  );
}

export default Workspace;
