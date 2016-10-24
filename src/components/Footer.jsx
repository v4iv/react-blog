/**
 * Created by Vaibhav on 10/13/2016.
 */
var React = require('react');

var Footer = React.createClass({
    render: function () {
        return (
            <div id="footer-wrapper">
                <div id="footer" className="container">
                    <header>
                        <h2>Questions or comments? <strong>Get in touch:</strong></h2>
                    </header>
                    <div className="row">
                        <div className="6u 12u(mobile)">
                            <section>
                                <form method="post" action="#">
                                    <div className="row 50%">
                                        <div className="6u 12u(mobile)">
                                            <input name="name" placeholder="Name" type="text"/>
                                        </div>
                                        <div className="6u 12u(mobile)">
                                            <input name="email" placeholder="Email" type="text"/>
                                        </div>
                                    </div>
                                    <div className="row 50%">
                                        <div className="12u">
                                            <textarea name="message" placeholder="Message"/>
                                        </div>
                                    </div>
                                    <div className="row 50%">
                                        <div className="12u">
                                            <a href="#" className="form-button-submit button icon fa-envelope">Send
                                                Message</a>
                                        </div>
                                    </div>
                                </form>
                            </section>
                        </div>
                        <div className="6u 12u(mobile)">
                            <section>
                                <p>Erat lorem ipsum veroeros consequat magna tempus lorem ipsum consequat Phaselamet
                                    mollis tortor congue. Sed quis mauris sit amet magna accumsan tristique. Curabitur
                                    leo nibh, rutrum eu malesuada.</p>
                                <div className="row">
                                    <div className="6u 12u(mobile)">
                                        <ul className="icons">
                                            <li className="icon fa-home">
                                                1234 Somewhere Road<br />
                                                Nashville, TN 00000<br />
                                                USA
                                            </li>
                                            <li className="icon fa-phone">
                                                (000) 000-0000
                                            </li>
                                            <li className="icon fa-envelope">
                                                <a href="#">info@untitled.tld</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="6u 12u(mobile)">
                                        <ul className="icons">
                                            <li className="icon fa-twitter">
                                                <a href="#">@untitled-tld</a>
                                            </li>
                                            <li className="icon fa-instagram">
                                                <a href="#">instagram.com/untitled-tld</a>
                                            </li>
                                            <li className="icon fa-dribbble">
                                                <a href="#">dribbble.com/untitled-tld</a>
                                            </li>
                                            <li className="icon fa-facebook">
                                                <a href="#">facebook.com/untitled-tld</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
                <div id="copyright" className="container">
                    <ul className="links">
                        <li>&copy; Untitled. All rights reserved.</li>
                        <li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
                    </ul>
                </div>
            </div>
        );
    }
});

module.exports = Footer;