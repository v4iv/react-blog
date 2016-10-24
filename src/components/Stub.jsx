/**
 * Created by Vaibhav on 10/13/2016.
 */
var React = require('react');

var Stub = React.createClass({
    render: function () {
        return (

            <article className="box post">
                <header>
                    <h2><a href="#">I don’t want to say <strong>it’s the aliens</strong> ...<br />
                        but it’s the aliens.</a></h2>
                </header>
                <a href="#" className="image featured"><img src="images/pic04.jpg" alt=""/></a>
                <h3>I mean isn't it possible?</h3>
                <p>Phasellus laoreet massa id justo mattis pharetra. Fusce suscipit
                    ligula vel quam viverra sit amet mollis tortor congue. Sed quis mauris
                    sit amet magna accumsan tristique. Curabitur leo nibh, rutrum eu malesuada
                    in, tristique at erat lorem ipsum dolor sit amet lorem ipsum sed consequat
                    magna tempus veroeros lorem sed tempus aliquam lorem ipsum veroeros
                    consequat magna tempus lorem ipsum consequat Phasellus laoreet massa id
                    justo mattis pharetra. Fusce suscipit ligula vel quam viverra sit amet
                    mollis tortor congue. Sed quis mauris sit amet magna accumsan tristique.
                    Curabitur leo nibh, rutrum eu malesuada in, tristique at erat.</p>
                <ul className="actions">
                    <li><a href="#" className="button icon fa-file">Continue Reading</a></li>
                </ul>
            </article>
        );
    }
});

module.exports = Stub;