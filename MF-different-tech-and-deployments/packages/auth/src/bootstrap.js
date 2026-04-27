import React from "react";
import ReactDOM from "react-dom";
import { createMemoryHistory, createBrowserHistory } from "history";
import App from "./App";

//Mount function is needed to ensure that the container has an element which is used and is not changed in the child application. This is needed because the child application is not aware of the container and it should not be changed by the child application.
const mount = (el, { onSignIn, onNavigate, defaultHistory, initialPath }) => {
  const history =
    defaultHistory || createMemoryHistory({ initialEntries: [initialPath] });
  if (onNavigate) history.listen(onNavigate);
  ReactDOM.render(<App onSignIn={onSignIn} history={history} />, el);
  return {
    onParentNavigate({ pathname: nextPathname }) {
      const { pathname } = history.location;
      if (pathname !== nextPathname) history.push(nextPathname);
    },
  };
};

//If we are in development and in isolation, call mount immediately
if (process.env.NODE_ENV === "development") {
  //Check 2 : Child and container elements should be kept different ids with dev, container, etc. prefixes to make them distinct
  const devRoot = document.querySelector("#_auth-dev-root");
  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}

//If we are running through container, export the mount function
export { mount };
