import React from "react"
import GoogleAnalytics from "react-ga"

import settings from "../../../config/settings"

GoogleAnalytics.initialize(settings.GOOGLE_ANALYTICS_KEY /*, {debug : true}*/)

const GoogleAnalyticsTracking = WrappedComponent => {
  const trackPage = page => {
    GoogleAnalytics.set({ page })
    GoogleAnalytics.pageview(page)
  }

  const HOC = props => {
    const page = props.location.pathname
    //Disable on dev
    if (!settings.dev) {
      trackPage(page)
    }

    return <WrappedComponent {...props} />
  }

  return HOC
}
