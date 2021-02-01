import React, { Fragment } from "react"
import Header from "./header"
import Helmet from "react-helmet"

const Layout = props => {
  return (
    <Fragment>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
          crossorigin="anonymous"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans&display=swap"
          rel="stylesheet"
        />
        <title>Umbral Hotel</title>
      </Helmet>

      <Header />
      {props.children}
    </Fragment>
  )
}

export default Layout
