import { createApp } from "vue";
import Dashboard from "./components/Dashboard.vue";

//Mount function is needed to ensure that the container has an element which is used and is not changed in the child application. This is needed because the child application is not aware of the container and it should not be changed by the child application.
const mount = (el) => {
  const app = createApp(Dashboard);
  app.mount(el);
};

//If we are in development and in isolation, call mount immediately
if (process.env.NODE_ENV === "development") {
  //Check 2 : Child and container elements should be kept different ids with dev, container, etc. prefixes to make them distinct
  const devRoot = document.querySelector("#_dashboard-dev-root");
  if (devRoot) {
    mount(devRoot);
  }
}

//If we are running through container, export the mount function
export { mount };
