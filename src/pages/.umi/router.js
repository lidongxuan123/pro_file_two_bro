import React from 'react';
import {
  Router as DefaultRouter,
  Route,
  Switch,
  StaticRouter,
} from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/lib/renderRoutes';
import history from '@@/history';
import RendererWrapper0 from 'F:/react_file/pro_file_two_bro/src/pages/.umi/LocaleWrapper.jsx';
import _dvaDynamic from 'dva/dynamic';

const Router = require('dva/router').routerRedux.ConnectedRouter;

const routes = [
  {
    path: '/',
    component: __IS_BROWSER
      ? _dvaDynamic({
          component: () =>
            import(/* webpackChunkName: "layouts__index" */ '../../layouts/index.js'),
          LoadingComponent: require('F:/react_file/pro_file_two_bro/src/components/PageLoading/index')
            .default,
        })
      : require('../../layouts/index.js').default,
    routes: [
      {
        path: '/CoursewarePage',
        exact: true,
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__CoursewarePage__index" */ '../CoursewarePage/index.js'),
              LoadingComponent: require('F:/react_file/pro_file_two_bro/src/components/PageLoading/index')
                .default,
            })
          : require('../CoursewarePage/index.js').default,
      },
      {
        path: '/CoursewarePage',
        exact: true,
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__CoursewarePage" */ '../CoursewarePage.tsx'),
              LoadingComponent: require('F:/react_file/pro_file_two_bro/src/components/PageLoading/index')
                .default,
            })
          : require('../CoursewarePage.tsx').default,
      },
      {
        path: '/ManagementPage',
        exact: true,
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__ManagementPage__index" */ '../ManagementPage/index.js'),
              LoadingComponent: require('F:/react_file/pro_file_two_bro/src/components/PageLoading/index')
                .default,
            })
          : require('../ManagementPage/index.js').default,
      },
      {
        path: '/ManagementPage/menu',
        exact: true,
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__ManagementPage__menu" */ '../ManagementPage/menu.js'),
              LoadingComponent: require('F:/react_file/pro_file_two_bro/src/components/PageLoading/index')
                .default,
            })
          : require('../ManagementPage/menu.js').default,
      },
      {
        path: '/Mooc',
        exact: true,
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__Mooc__index" */ '../Mooc/index.js'),
              LoadingComponent: require('F:/react_file/pro_file_two_bro/src/components/PageLoading/index')
                .default,
            })
          : require('../Mooc/index.js').default,
      },
      {
        path: '/Operation/data',
        exact: true,
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__Operation__data" */ '../Operation/data.js'),
              LoadingComponent: require('F:/react_file/pro_file_two_bro/src/components/PageLoading/index')
                .default,
            })
          : require('../Operation/data.js').default,
      },
      {
        path: '/Operation',
        exact: true,
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__Operation__index" */ '../Operation/index.js'),
              LoadingComponent: require('F:/react_file/pro_file_two_bro/src/components/PageLoading/index')
                .default,
            })
          : require('../Operation/index.js').default,
      },
      {
        path: '/Operation/menu',
        exact: true,
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__Operation__menu" */ '../Operation/menu.js'),
              LoadingComponent: require('F:/react_file/pro_file_two_bro/src/components/PageLoading/index')
                .default,
            })
          : require('../Operation/menu.js').default,
      },
      {
        path: '/Operation/studentInfo/data',
        exact: true,
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__Operation__studentInfo__data" */ '../Operation/studentInfo/data.js'),
              LoadingComponent: require('F:/react_file/pro_file_two_bro/src/components/PageLoading/index')
                .default,
            })
          : require('../Operation/studentInfo/data.js').default,
      },
      {
        path: '/Operation/studentInfo/studentInfo',
        exact: true,
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__Operation__studentInfo__studentInfo" */ '../Operation/studentInfo/studentInfo.tsx'),
              LoadingComponent: require('F:/react_file/pro_file_two_bro/src/components/PageLoading/index')
                .default,
            })
          : require('../Operation/studentInfo/studentInfo.tsx').default,
      },
      {
        path: '/Operation',
        exact: true,
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__Operation" */ '../Operation.tsx'),
              LoadingComponent: require('F:/react_file/pro_file_two_bro/src/components/PageLoading/index')
                .default,
            })
          : require('../Operation.tsx').default,
      },
      {
        path: '/WorkSpace',
        exact: true,
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__WorkSpace__index" */ '../WorkSpace/index.js'),
              LoadingComponent: require('F:/react_file/pro_file_two_bro/src/components/PageLoading/index')
                .default,
            })
          : require('../WorkSpace/index.js').default,
      },
      {
        component: () =>
          React.createElement(
            require('F:/react_file/pro_file_two_bro/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'src/pages', hasRoutesInConfig: false },
          ),
      },
    ],
  },
  {
    component: () =>
      React.createElement(
        require('F:/react_file/pro_file_two_bro/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
          .default,
        { pagesPath: 'src/pages', hasRoutesInConfig: false },
      ),
  },
];
window.g_routes = routes;
const plugins = require('umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

export { routes };

export default class RouterWrapper extends React.Component {
  unListen() {}

  constructor(props) {
    super(props);

    // route change handler
    function routeChangeHandler(location, action) {
      plugins.applyForEach('onRouteChange', {
        initialValue: {
          routes,
          location,
          action,
        },
      });
    }
    this.unListen = history.listen(routeChangeHandler);
    // dva 中 history.listen 会初始执行一次
    // 这里排除掉 dva 的场景，可以避免 onRouteChange 在启用 dva 后的初始加载时被多执行一次
    const isDva =
      history.listen
        .toString()
        .indexOf('callback(history.location, history.action)') > -1;
    if (!isDva) {
      routeChangeHandler(history.location);
    }
  }

  componentWillUnmount() {
    this.unListen();
  }

  render() {
    const props = this.props || {};
    return (
      <RendererWrapper0>
        <Router history={history}>{renderRoutes(routes, props)}</Router>
      </RendererWrapper0>
    );
  }
}
