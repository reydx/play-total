import React, { Component } from 'react';
import {
  HashRouter, Switch, Route, Redirect,BrowserRouter
} from 'react-router-dom';
import loadable from '@loadable/component';

const Home = loadable(() => import('../src/page/home/index'));
const Demo = loadable(() => import('../src/page/demo/index'));

function wrapperFrame(Page, AppRouterProps) {
  return class extends React.Component {
    render() {
      return (
            <Page />
      );
    }
  };
}
export default class AppRouter extends Component {
  render() {
    return (
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={wrapperFrame(props => <Home {...props} />)} />
            <Route path="/demo" exact component={wrapperFrame(props => <Demo {...props} />)} />
            <Redirect to="/" />
          </Switch>
        </BrowserRouter>
    );
  }
}