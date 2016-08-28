/**
 * 路由捕手组件
 * 捕获所有界面上的路由响应
 * Created by yinfxs on 16-6-21.
 */

'use strict';

const React = require('react');
const ComA = require('./ComA.react');
const ComB = require('./ComB.react');
const ComC = require('./ComC.react');
const NoMatch = require('./NoMatch.react');
const CodeUtils = require('../utils/CodeUtils');
const cv = JSON.parse(CodeUtils.decodeBase64(localStorage.getItem('C_V'), 5)) || [];

const RouteCatcher = React.createClass({
    contextTypes: {
        router: React.PropTypes.object
    },
    getInitialState(){
        return {}
    },
    componentDidMount(){
        console.log('RouteCatcher...');
    },
    render(){
        console.log('RouteCatcher.render...');
        const path = this.props.params.path;
        const query = this.props.location.query;
        let content = <NoMatch path={path} query={query}/>;
        switch (path) {
            case 'a':
                content = <ComA path={path} query={query}/>;
                break;
            case 'b':
                content = <ComB path={path} query={query}/>;
                break;
            case 'c':
                content = <ComC path={path} query={query}/>;
                break;
            default:
                break;
        }
        return content;
    }
});

module.exports = RouteCatcher;