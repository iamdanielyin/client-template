/**
 * 后台主页组件
 * Created by yinfxs on 16-6-14.
 */

'use strict';

const React = require('react');
const moment = require('moment');
const Link = require('react-router').Link;
const RouteUtils = require('../utils/RouteUtils');
const CodeUtils = require('../utils/CodeUtils');
const ToastrUtils = require('../utils/ToastrUtils');

const Admin = React.createClass({
    contextTypes: {
        router: React.PropTypes.object
    },
    getInitialState(){
        const state = {profile: {}, menu: <li></li>}
        let token = localStorage.getItem('access_token');
        token = token ? JSON.parse(token) : {};
        state.token = token;
        state.access_token = token.access_token;
        return state;
    },

    componentDidMount(){
        // if (!localStorage.getItem('access_token')) return this.context.router.push('/signin');
    },
    render(){
        return (
            <div>
                <h3>请点击以下菜单项</h3>
                <ul>
                    <li><Link to="/ishop/a">组件A</Link></li>
                    <li><Link to="/ishop/b">组件B</Link></li>
                    <li><Link to="/ishop/c">组件C</Link></li>
                </ul>
                <div>{this.props.children}</div>
            </div>

        );
    }
});

module.exports = Admin;