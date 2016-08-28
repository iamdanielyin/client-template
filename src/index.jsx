/**
 * 客户端入口文件
 * Created by yinfxs on 16-6-14.
 */

'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const moment = require('moment');
const Router = require('react-router').Router;
const Route = require('react-router').Route;
const hashHistory = require('react-router').hashHistory;

const MyButtonController = require('./components/MyButtonController');

const App = require('./components/App.react');
const Admin = require('./components/Admin.react');
const NoMatch = require('./components/NoMatch.react');
const RouteCatcher = require('./components/RouteCatcher.react');

moment.locale('zh-cn');//设置全局国际化

require('./utils/RequireUtils');


const app = document.createElement('div');
document.body.appendChild(app);

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="ishop" component={Admin}>
                <Route path=":path" component={RouteCatcher}/>
            </Route>
            <Route path="*" component={NoMatch}/>
        </Route>
    </Router>
), app);