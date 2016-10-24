/**
 * Created by Vaibhav on 10/13/2016.
 */
var React = require('react');

var Header = React.createClass({
    render: function () {
        return (
            <div id="header-wrapper">
                <div id="header" className="container">

                    <h1 id="logo"><a href="#/">The Leaky Cauldron</a></h1>
                    <p>A brew of codes, entertainment, awesomeness with a pinch of magic...</p>

                    {this.props.children}

                </div>
            </div>
        );
    }
});

module.exports = Header;