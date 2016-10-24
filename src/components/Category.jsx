/**
 * Created by Vaibhav on 10/13/2016.
 */
var React = require('react');

var Category = React.createClass({
    render: function () {
        return (
            <li><a href="#">{this.props.categoryName}</a></li>
        );
    }
});

module.exports = Category;