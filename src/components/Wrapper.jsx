/**
 * Created by Vaibhav on 10/14/2016.
 */
var React = require('react');

var Wrapper = React.createClass({
    render: function () {
        return (
            <div id="main-wrapper">
                <div id="main" className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
});

module.exports = Wrapper;