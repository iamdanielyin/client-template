/**
 * 入口组件
 * Created by yinfxs on 16-6-14.
 */

'use strict';

const React = require('react');
const Link = require('react-router').Link;
const util = require('util');
const RouteUtils = require('../utils/RouteUtils');
const CodeUtils = require('../utils/CodeUtils');
const ToastrUtils = require('../utils/ToastrUtils');

const App = React.createClass({
    contextTypes: {
        router: React.PropTypes.object
    },
    componentDidMount() {
        console.log('App.');
        const self = this;
        const curr = self.props.location.pathname;
        console.log(curr);
        if (!curr.startsWith('/ishop')) return self.context.router.push('/ishop');
    },
    render(){
        return <div className="mainContent">
            {this.props.children}
        </div>;
    }
});

module.exports = App;