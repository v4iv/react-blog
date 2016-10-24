/**
 * Created by Vaibhav on 10/13/2016.
 */
var React = require('react');

var Content = React.createClass({
    render: function () {
        return (
            <div className="row">
                {this.props.children}
            </div>

        );
    }
});

module.exports = Content;