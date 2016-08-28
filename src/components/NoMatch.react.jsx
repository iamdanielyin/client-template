/**
 * 未知路由组件
 * Created by yinfxs on 16-6-14.
 */

'use strict';

const React = require('react');
const Link = require('react-router').Link;

const NoMatch = React.createClass({
    render(){
        return (
            <p>
                找不到你想要的页面哦，你可以选择<Link to="/ishop">回到主页</Link>或者在下面搜索
            </p>
        );
    }
});

module.exports = NoMatch;