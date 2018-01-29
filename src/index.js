import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Landing from './Container/Landing/Landing'
import withTracker from './withTracker'
import App from './Container/App/App'

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-w.js').then(registration => {
            console.log('SW registered: ', registration);
        }).catch(registrationError => {
            console.log('SW registration failed: ', registrationError);
        });
    });
}

render(
  <Router>
    <Route
      component={withTracker(App, {
        /* additional attributes */
      })}
    />
  </Router>,
  document.getElementById("root")
)
