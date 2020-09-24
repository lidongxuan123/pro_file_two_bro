import React, { useEffect, useState } from 'react';
import { Layout, DatePicker, Button, Menu } from 'antd';
import manange from '@/assets/manage.svg';
import style from './index.less';
import 'antd/dist/antd.css'

const { Sider } = Layout;
const { SubMenu } = Menu;

const history = require('umi/lib/createHistory').default({ basename: window.routerBase });

const BasicLayout = props => {
  const handleRouter = (path) => {
    history.push({ pathname: `/${path}` });
  };

  return(
    <Layout>
      <div className={style.app}>
        <div className={style.menu}>
          <ul className={style.menu_ui}>
            <li>
              <img src={manange} alt="" />
            </li>
            <li onClick={() => handleRouter('material')}>资料管理</li>
            <li onClick={() => handleRouter('student')}>学生管理</li>
            <li onClick={() => handleRouter('class')}>课程安排</li>
          </ul>
        </div>
        <div className={style.content_flex}>
          <Sider>
            <Menu
              mode="inline"
            >
              <SubMenu
                title={
                  <span>
                    <span>Whale Club</span>
                  </span>
                }
              >
                <Menu.Item>Requests Management</Menu.Item>
                <Menu.Item >Club Audit</Menu.Item>
                <Menu.Item>Club View</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <div className={style.content_flex_right}>
            {props.children}
          </div>
        </div>
      </div>
    </Layout>
  )
};

export default BasicLayout;