/**
 * Created by Vaibhav on 10/13/2016.
 */
var React = require('react');

var NavBar = React.createClass({
    render: function () {
        return (
            <nav id="nav">
                <ul>
                    <li><a className="icon fa-home" href="#/"><span>Home</span></a></li>
                    <li>
                        <a href="#" className="icon fa-bars"><span>Categories</span></a>
                        <ul>
                            {this.props.children}
                        </ul>
                    </li>
                    <li><a className="icon fa-archive" href="#/archives"><span>Archives</span></a></li>
                    <li><a className="icon fa-info" href="#/about"><span>About</span></a></li>
                    <li><a className="icon fa-envelope" href="#contact"><span>Contact</span></a></li>
                </ul>
            </nav>
        );
    }
});

module.exports = NavBar;