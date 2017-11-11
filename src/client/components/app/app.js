const React = require('react')
const Header = require('../header/header')
const Footer = require('../footer/footer')
const Container = require('../container/container')

require('./app.css')

module.exports = () => (
    <div>
        <Header />
        <Container />
        <Footer />
    </div>
)
