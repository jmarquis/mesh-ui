import React from "react"
import { render } from "react-dom"

import { AppContainer } from "react-hot-loader"

import App from "App"

const mountPoint = document.getElementById("app")

const renderApp = AppComponent => {
  render(
    <AppContainer>
      {/* <Provider store={store}> */}
        {/* <Router history={browserHistory}> */}
          <AppComponent />
        {/* </Router> */}
      {/* </Provider> */}
    </AppContainer>,
    mountPoint
  )
}

renderApp(App)

if (module.hot) {
  module.hot.accept("./components/App", () => {
    const NewApp = require("./components/App").default
    renderApp(NewApp)
  })
}
