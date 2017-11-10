import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Contact from '../Contact/Contact'
import Homepage from '../Homepage/Homepage'
import Layout from '../Layout/Layout'
import PostCard from '../PostCard/PostCard'
import './App.scss'


const App = () => (
    <div>
    
            <Route exact path='/' component={Layout} />
            <Switch>
                <Route path='/homepage' component={Homepage} />
            </Switch>
    </div>
    )
    
    export default App