const React = require('react')
const { Link } = require('react-router-dom')

class Header extends React.Component {
    render() {
        return (
            <header>
                <nav>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/contact'>Contact Us</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

module.exports = Header