import React from 'react';
import {
  Route, Switch, BrowserRouter, Redirect,
} from 'react-router-dom';
import * as containers from './containers';

import '../styles/app.scss';

const globalAppSource = '/';

const routeConfig = [
  { title: '首页', path: 'index', component: 'Home' },
  { title: '约惠宝', path: 'buy', component: 'Buy' },
  { title: '约惠宝', path: 'detail', component: 'Detail' },
  { title: '签约记录', path: 'records', component: 'ContactRecord' },
  { title: '签约管理', path: 'manage', component: 'ContactManage' },
  { title: '签约记录', path: 'equity', component: 'Equity' },
];

const SetTitleRoute = ({ title, ...rest }) => {
  if (title) {
    document.title = title;
    window.ant.setTitle(title);
  }
  return <Route {...rest} exact />;
};

export default () => (
  <BrowserRouter>
    <Switch>
      {routeConfig.map((item, index) => (
        <SetTitleRoute
          key={index}
          title={item.title}
          path={globalAppSource + item.path}
          component={containers[item.component]}
        />
      ))}
      <Redirect path="*" to={`${globalAppSource}index`} />

    </Switch>
  </BrowserRouter>
);
