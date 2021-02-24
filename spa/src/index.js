import React from "react"
import ReactDOM from "react-dom"
import Main from "./Main"
import "./index.css"
import { initFacebookSdk } from "./services/init-facebook-sdk"

initFacebookSdk().then(_onFulfilled =>
  ReactDOM.render(
    <Main />,
    document.getElementById("root")
  )
)
