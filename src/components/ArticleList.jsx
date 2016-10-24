/**
 * Created by Vaibhav on 10/24/2016.
 */
var React = require('react');

var ArticleList = React.createClass({
    render: function () {
        return (
            <div id="content" className="8u 12u(mobile)">
                {this.props.children}
            </div>
        );
    }
});

module.exports = ArticleList;