import Home from './containers/Home/routes';
import Services from "./containers/Services/routes";
import Blog from "./containers/Blog/routes";
import Contact from "./containers/Contact/routes";
import Auth0CallBack from "./components/Auth0Callback/routes";

export default [
  ...Home,
  ...Blog,
  ...Services,
  ...Auth0CallBack,
  ...Contact,
];
