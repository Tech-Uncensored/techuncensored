import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Footer from '../Common/Footer/Footer'
import Header from '../Common/Header/Header'
import Contact from '../Contact/Contact'
import Homepage from '../Homepage/Homepage'
import Layout from '../Layout/Layout'
import PostCard from '../PostCard/PostCard'
import Splash from '../Splash/Splash'
import Blog from '../Blog/Blog'
import Article from '../Article/Article'
import './App.scss'


const App = () => (
    <div>
        <Switch>
            <Route path='/homepage' component={Homepage} />
            <Route path='/splash' component={Splash} />
            <Route path='/blog/:permalink' component={Article} />
            <Route path='/blog' component={Blog} />
        </Switch>
    </div>
    )
    
    export default App