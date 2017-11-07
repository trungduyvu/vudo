const React = require('react')
const Home = require('../home/home')
const About = require('../about')
const Contact = require('../contact')
const {Switch, Route} = require('react-router-dom')

class Container extends React.Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Home}></Route>
                    <Route path='/about' component={About}></Route>
                    <Route path='/contact' component={Contact}></Route>
                </Switch>
            </main>
        )
    }
}

module.exports = Container
