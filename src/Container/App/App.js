import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Contact from '../Contact/Contact'
import Homepage from '../Homepage/Homepage'
import Layout from '../Layout/Layout'
import PostCard from '../PostCard/PostCard'
import Splash from '../Splash/Splash'
import Blog from '../Blog/Blog'
import Article from '../Article/Article'
import HomeSplash from '../HomeSplash/HomeSplash'
import IotWorks from '../Splash/IotWorks/IotWorks'
import WebSolution from '../HomeSplash/WebSolution/WebSolution'
//import Sample from '../Sample/Sample'
import SubPage from '../SubPage/SubPage'
import Skills from './Skills'
import Home from '../Home/Home'
//import Error from '../Error/Error'


import './App.scss'


const App = () => (
    <div>
    <Route exact path='/' component={Splash} />
        <Switch>
            <Route path='/homepage' component={Homepage} />
            <Route path='/splash' component={Splash} />
            <Route path='/blog/:permalink' component={Article} />
            <Route path='/blog' component={Blog} />
            <Route path='/homesplash' component={HomeSplash} />
            <Route path='/sample' component={SubPage} />
            <Route path='/skills' component={Skills} />
            <Route path='/home' component={Home} />
            
            
           
        </Switch>
    </div>
)

export default App
