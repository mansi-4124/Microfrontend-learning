import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//Mount function is needed to ensure that the container has an element which is used and is not changed in the child application. This is needed because the child application is not aware of the container and it should not be changed by the child application.
const mount = (el) => {
  ReactDOM.render(<App />, el);
};

//If we are in development and in isolation, call mount immediately
if (process.env.NODE_ENV === "development") {
  //Check 2 : Child and container elements should be kept different ids with dev, container, etc. prefixes to make them distinct
  const devRoot = document.querySelector("#_marketing-dev-root");
  if (devRoot) {
    mount(devRoot);
  }
}

//If we are running through container, export the mount function
export { mount };
