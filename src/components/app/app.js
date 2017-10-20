const React = require('react')
const Header = require('../header/header')
const Footer = require('../footer/footer')
const Container = require('../container/container')

require('./app.css');

class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Container/>
                <Footer/>
            </div>
        )
    }
}

module.exports = App