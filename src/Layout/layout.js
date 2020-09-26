import React, { useEffect, useState } from 'react';
import { Layout, Menu } from 'antd';
import manange from '@/assets/manage.svg';
import asideMenuConfig from './menu';
import style from './index.less';
import 'antd/dist/antd.css'
import menuManagement from "@/pages/managementPage/menu.js"
import menuOperate from "@/pages/operation/menu.js"
const { Sider } = Layout;
const { SubMenu } = Menu;

const history = window.g_history;

const BasicLayout = props => {
  const [menuName, setMenuName] = useState('');
  const [menuList, setMenuList] = useState([]);
  let currentMenuList = [] //表示当前菜单项列表
  const handleRouter = (path) => {
    switch (path) {
      case "upload":
        currentMenuList = menuManagement
        console.log(currentMenuList)
      break;
      case "operation":
        currentMenuList = menuOperate;
        console.log(currentMenuList)
        break;
    }
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
          <Menu>
            {
              menuList.map((item, index) => (
                if (item.subMenu) {
                  <SubMenu key="index" title="item.name">
                    {
                      item.subMenu.map(subItem, index) =>(
                        <Menu.Item key={subItem.key}>{subItem.name}</Menu.Item>
                      )
                    }
                  </SubMenu>
                } else {
                  <Menu.Item key={index}>{item.name}</Menu.Item>
                }
              ))
            }
          </Menu>



            {/*<Menu
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
            </Menu>*/}
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