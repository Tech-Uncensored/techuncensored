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
import Sample from '../Sample/Sample'
import SubPage from '../SubPage/SubPage'
import Skills from '../Skills/Skills'
import Home from '../Home/Home'
import AboutUs from '../AboutUs/AboutUs'
import OurWork from '../OurWork/OurWork'
import Header from '../Common/Header/Header'
import Footer from '../Common/Footer/Footer'
//import Footer from '../HomeSplash/HomeSplashFooter/HomeSplashFooter'
//import Error from '../Error/Error'

import './App.scss'


const App = () => (
    <div>
        <Header />
        <Route exact path='/' component={Home} />
            <Switch>
                <Route path='/header' component={Header} />
                <Route path='/splash' component={Splash} />
                <Route path='/blog/:permalink' component={Article} />
                <Route path='/about' component={AboutUs} />
                <Route path='/work' component={OurWork} />
                <Route path='/blog' component={Blog} />
                <Route path='/:permalink' component={Sample} />
            </Switch>
        <Footer />
    </div>
)

export default App
