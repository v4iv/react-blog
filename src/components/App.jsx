/**
 * Created by Vaibhav on 10/8/2016.
 */
var React = require('react');
var NavBar = require('./NavBar.jsx');
var Category = require('./Category.jsx');
var Header = require('./Header.jsx');
var Wrapper = require('./Wrapper.jsx');
var Content = require('./Content.jsx');
var ArticleList = require('./ArticleList.jsx');
var Stub = require('./Stub.jsx');
var SideBar = require('./Sidebar.jsx');
var Excerpt = require('./Excerpt.jsx');
var Footer = require('./Footer.jsx');

var App = React.createClass({
    render: function () {
        return (
            <div id="page-wrapper">
                <Header>
                    <NavBar>
                        <Category categoryName='Coding'/>
                        <Category categoryName='Entertainment'/>
                        <Category categoryName='Fiction'/>
                        <Category categoryName='Misc'/>
                    </NavBar>
                </Header>
                <Wrapper>
                    <Content>
                        <ArticleList>
                            <Stub/>
                            <Stub/>
                            <Stub/>
                        </ArticleList>
                        <SideBar>
                            <Excerpt/>
                            <Excerpt/>
                            <Excerpt/>
                        </SideBar>
                    </Content>
                </Wrapper>
                <Footer/>
            </div>
        );
    }
});

module.exports = App;