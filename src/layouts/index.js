import React, { useEffect, useState } from 'react';
import { Layout, Menu } from 'antd';
import { Breadcrumb } from 'antd';
import manange from '@/assets/manage.svg';
import asideMenuConfig from './menu';
import style from './index.less';
import 'antd/dist/antd.css'
import menuManagement from "@/pages/managementPage/menu.js"
import menuOperate from "@/pages/Operation/menu.js"
const { Sider } = Layout;
const { SubMenu } = Menu;

const history = window.g_history;

const BasicLayout = props => {
  const [menuName, setMenuName] = useState('');
  const [menuList, setMenuList] = useState([]);
  const [flag, setFlag] = useState(0)
  let currentMenuList = [] //表示当前菜单项列表
  const handleRouter = (path,index) => {
    setFlag(index)
    switch (path) {
      case "operation":
        currentMenuList = menuManagement;
        setMenuList(currentMenuList);
      break;
      case "course-ware":
        currentMenuList = menuOperate;
        setMenuList(currentMenuList);
        break;
       case "class":
        currentMenuList = menuOperate;
        setMenuList(currentMenuList);
        break;
      default:
        currentMenuList = menuManagement;
        setMenuList(currentMenuList)
    }
    history.push({ pathname: `/${path}`});
  };

  useEffect(() => {
    asideMenuConfig.map(item => {
      if (history.location.pathname === item.path) {
        setMenuName(item.name);
        setMenuList(menuManagement);
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
            <li className={ flag == 0? style.active: ''} onClick={() => handleRouter('operation', 0)}>管理</li>
            <li className={ flag == 1? style.active: ''} onClick={() => handleRouter('course-ware',  1)}>课件</li>
            <li className={ flag == 2? style.active: ''} onClick={() => handleRouter('class',  2)}>课程</li>
          </ul>
        </div>
        <div className={style.content_flex}>
          <Sider>
          <Menu mode="inline" theme="dark">
            {menuList.map((item, index) => {
              console.log(item)
              return ( item.subMenu ? (
                <SubMenu key={index} title={item.name}>
                  {item.subMenu.map((subItem, index) => (
                    <Menu.Item title={subItem.name} key={subItem.key}>{subItem.name}</Menu.Item>
                  ))}
                </SubMenu>
              ) : (
                <Menu.Item key={index}>{item.name}</Menu.Item>
              ))
            })}
          </Menu>
          </Sider>
          <div className={style.content_flex_right}>
            <div className={style.content_flex_right_breadcurmb}>
               <Breadcrumb>
                  {props.children.props.location instanceof Object ?
                  (<Breadcrumb.Item >
                    管理页
                    </Breadcrumb.Item>) : (
                      props.children.props.location.map((element,index)=>{
                        <Breadcrumb.Item >
                          <a href="">{element.key}</a>
                        </Breadcrumb.Item>
                      })
                    )
                  }
              </Breadcrumb>
            </div>
              {/*props.children.props.location.map((element, index)=> {
                return (<Breadcrumb.Item >
              
                </Breadcrumb.Item>)
              })*/}
            {
              console.log(props.children)
            }
            {props.children}
          </div>
        </div>
      </div>
    </Layout>
  )
};

export default BasicLayout;