/**
 * Created by Vaibhav on 10/13/2016.
 */
var React = require('react');

var Excerpt = React.createClass({
    render: function () {
        return (
            <li>
                <article className="box excerpt">
                    <header>
                        <span className="date">July 30</span>
                        <h3><a href="#">Just another post</a></h3>
                    </header>
                    <p>Lorem ipsum dolor odio facilisis convallis. Etiam non nunc vel est
                        suscipit convallis non id orci lorem ipsum sed magna consequat feugiat lorem dolore.</p>
                </article>
            </li>
        );
    }
});

module.exports = Excerpt;