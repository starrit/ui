import Home from './containers/Home/routes';
import Dashboard from "./containers/Dashboard/routes";
import Contact from "./containers/Contact/routes";
import Auth0CallBack from "./components/Auth0Callback/routes";

export default [
  ...Home,
  ...Dashboard,
  ...Auth0CallBack,
  ...Contact,
];
