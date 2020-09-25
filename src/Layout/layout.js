import React, { useEffect, useState } from 'react';
import { Layout, Menu } from 'antd';
import manange from '@/assets/manage.svg';
import asideMenuConfig from './menu';
import style from './index.less';
import 'antd/dist/antd.css'

const { Sider } = Layout;
const { SubMenu } = Menu;

const history = window.g_history;

const BasicLayout = props => {
  const [menuName, setMenuName] = useState('');
  const [menuList, setMenuList] = useState([]);

  const handleRouter = (path) => {
    history.push({ pathname: `/${path}`});
  };

  useEffect(() => {
    asideMenuConfig.map(item => {
      if (history.location.pathname === item.path) {
        setMenuName(item.name);
        setMenuList(item.value)
      }
    })
  }, [asideMenuConfig])

  return(
    <Layout>
      <div className={style.app}>
        <div className={style.menu}>
          <ul className={style.menu_ui}>
            <li onClick={() => handleRouter('')}>
              <img src={manange} alt="" />
            </li>
            <li onClick={() => handleRouter('operation')}>管理操作</li>
            <li onClick={() => handleRouter('upload')}>资料上传</li>
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
                    <span>{menuName}</span>
                  </span>
                }
              >
                {menuList.map((item, index) => (
                  <Menu.Item key={index}>{item}</Menu.Item>
                ))}
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