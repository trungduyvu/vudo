const React = require('react')
const { Link } = require('react-router-dom')


module.exports = () => (
    <header>
        <nav>
            <ul>
                <li><Link to="/" href="/">Home</Link></li>
                <li><Link to="/about" href="/about">About</Link></li>
                <li><Link to="/contact" href="/contact">Contact Us</Link></li>
            </ul>
        </nav>
    </header>
)
