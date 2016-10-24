/**
 * Created by Vaibhav on 10/13/2016.
 */
var React = require('react');

var Highlight = React.createClass({
    render: function () {
        return (
            <li>
                <article className="box highlight">
                    <header>
                        <h3><a href="#">Something of note</a></h3>
                    </header>
                    <a href="#" className="image left"><img src="images/pic06.jpg" alt="" /></a>
                    <p>Phasellus  sed laoreet massa id justo mattis pharetra. Fusce suscipit ligula vel quam
                        viverra sit amet mollis tortor congue magna lorem ipsum dolor et quisque ut odio facilisis
                        convallis. Etiam non nunc vel est suscipit convallis non id orci. Ut interdum tempus
                        facilisis convallis. Etiam non nunc vel est suscipit convallis non id orci.</p>
                    <ul className="actions">
                        <li><a href="#" className="button icon fa-file">Learn More</a></li>
                    </ul>
                </article>
            </li>
        );
    }
});

module.exports = Highlight;