import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Homepage from '../Homepage/Homepage'
import Splash from '../Splash/Splash'
import Blog from '../Blog/Blog'
import Article from '../Article/Article'
import HomeSplash from '../HomeSplash/HomeSplash'
import IotWorks from '../Splash/IotWorks/IotWorks'
import WebSolution from '../HomeSplash/WebSolution/WebSolution'
import Sample from '../Sample/Sample'
import Service from '../Service/Service'
import Skills from '../Skills/Skills'
import Home from '../Home/Home'
import AboutUs from '../AboutUs/AboutUs'
import OurWork from '../OurWork/OurWork'
import NewsLetter from '../NewsLetter/NewsLetter'
import Landing from '../Landing/Landing'
import Header from '../Common/Header/Header'
import Footer from '../Common/Footer/Footer'
//import Footer from '../HomeSplash/HomeSplashFooter/HomeSplashFooter'
//import Error from '../Error/Error'

import './App.scss'


const App = () => (
  <div>
    <Route path="landing" location={Landing} />
    <Header />
    <Route exact path="/" component={Home} />
    
    <Switch>
      <Route path="/splash" component={Splash} />  
      <Route path="/blog/:permalink" component={Article} />
      <Route path="/about" component={AboutUs} />
      <Route path="/work" component={OurWork} />
      <Route path="/blog" component={Blog} />
      {/* <Route path="/land" component={Landing} /> */}
    </Switch>
    <NewsLetter />
    <Footer />
  </div>
)

export default App
