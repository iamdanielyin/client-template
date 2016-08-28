/**
 * 组件C
 * Created by yinfxs on 16-6-14.
 */

'use strict';

const React = require('react');
const Link = require('react-router').Link;

const NoMatch = React.createClass({
    render(){
        return (
            <div>
                <h1>组件C</h1>
                <Link to="/ishop">回到主页</Link>
            </div>
        );
    }
});

module.exports = NoMatch;