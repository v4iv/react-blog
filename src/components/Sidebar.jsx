/**
 * Created by Vaibhav on 10/13/2016.
 */
var React = require('react');

var Sidebar = React.createClass({
    render: function () {
        return (
            <div id="sidebar" className="4u 12u(mobile)">
                <section>
                    <ul className="divided">
                        {this.props.children}
                    </ul>
                </section>
            </div>
        );
    }
});

module.exports = Sidebar;