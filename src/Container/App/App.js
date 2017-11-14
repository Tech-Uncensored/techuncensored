import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Contact from '../Contact/Contact'
import Homepage from '../Homepage/Homepage'
import Layout from '../Layout/Layout'
import PostCard from '../PostCard/PostCard'
import Splash from '../Splash/Splash'
import Blog from '../Blog/Blog'
import Article from '../Article/Article'
import HomeSplash from '../HomeSplash/HomeSplash'

import './App.scss'


const App = () => (
    <div>
        <Switch>
            <Route path='/homepage' component={Homepage} />
            <Route path='/splash' component={Splash} />
            <Route path='/blog/:permalink' component={Article} />
            <Route path='/blog' component={Blog} />
            <Route path='/homesplash' component={HomeSplash} />
            
            
        </Switch>
    </div>
    )
    
    export default App