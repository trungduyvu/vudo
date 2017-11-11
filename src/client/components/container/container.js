const React = require('react')
const Home = require('../home/home')
const About = require('../about')
const Contact = require('../contact')
const { Switch, Route } = require('react-router-dom')


module.exports = () => (
    <main>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
        </Switch>
    </main>
)

