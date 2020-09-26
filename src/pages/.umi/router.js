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
import RendererWrapper0 from 'C:/Users/DELL/Desktop/MyProject/project/pro_file_two_bro/src/pages/.umi/LocaleWrapper.jsx';
import _dvaDynamic from 'dva/dynamic';

const Router = require('dva/router').routerRedux.ConnectedRouter;

const routes = [
  {
    path: '/',
    component: __IS_BROWSER
      ? _dvaDynamic({
          component: () =>
            import(/* webpackChunkName: "layouts__index" */ '../../layouts/index.js'),
          LoadingComponent: require('C:/Users/DELL/Desktop/MyProject/project/pro_file_two_bro/src/components/PageLoading/index')
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
              LoadingComponent: require('C:/Users/DELL/Desktop/MyProject/project/pro_file_two_bro/src/components/PageLoading/index')
                .default,
            })
          : require('../CoursewarePage/index.js').default,
      },
      {
        path: '/',
        exact: true,
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__index" */ '../index.tsx'),
              LoadingComponent: require('C:/Users/DELL/Desktop/MyProject/project/pro_file_two_bro/src/components/PageLoading/index')
                .default,
            })
          : require('../index.tsx').default,
      },
      {
        path: '/managementPage',
        exact: true,
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__managementPage__index" */ '../managementPage/index.js'),
              LoadingComponent: require('C:/Users/DELL/Desktop/MyProject/project/pro_file_two_bro/src/components/PageLoading/index')
                .default,
            })
          : require('../managementPage/index.js').default,
      },
      {
        path: '/managementPage/menu',
        exact: true,
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__managementPage__menu" */ '../managementPage/menu.js'),
              LoadingComponent: require('C:/Users/DELL/Desktop/MyProject/project/pro_file_two_bro/src/components/PageLoading/index')
                .default,
            })
          : require('../managementPage/menu.js').default,
      },
      {
        path: '/Mooc',
        exact: true,
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__Mooc__index" */ '../Mooc/index.js'),
              LoadingComponent: require('C:/Users/DELL/Desktop/MyProject/project/pro_file_two_bro/src/components/PageLoading/index')
                .default,
            })
          : require('../Mooc/index.js').default,
      },
      {
        path: '/Operation',
        exact: true,
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__Operation__index" */ '../Operation/index.js'),
              LoadingComponent: require('C:/Users/DELL/Desktop/MyProject/project/pro_file_two_bro/src/components/PageLoading/index')
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
              LoadingComponent: require('C:/Users/DELL/Desktop/MyProject/project/pro_file_two_bro/src/components/PageLoading/index')
                .default,
            })
          : require('../Operation/menu.js').default,
      },
      {
        path: '/WorkSpace',
        exact: true,
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__WorkSpace__index" */ '../WorkSpace/index.js'),
              LoadingComponent: require('C:/Users/DELL/Desktop/MyProject/project/pro_file_two_bro/src/components/PageLoading/index')
                .default,
            })
          : require('../WorkSpace/index.js').default,
      },
      {
        component: () =>
          React.createElement(
            require('C:/Users/DELL/Desktop/MyProject/project/pro_file_two_bro/node_modules/_umi-build-dev@1.18.5@umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'src/pages', hasRoutesInConfig: false },
          ),
      },
    ],
  },
  {
    component: () =>
      React.createElement(
        require('C:/Users/DELL/Desktop/MyProject/project/pro_file_two_bro/node_modules/_umi-build-dev@1.18.5@umi-build-dev/lib/plugins/404/NotFound.js')
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
