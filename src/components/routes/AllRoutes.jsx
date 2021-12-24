import { Route } from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Services from "../pages/Services";

function AllRoutes() {
  return (
    <div>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/About">
        <About />
      </Route>
      <Route path="/Login">
        <Login />
      </Route>
      <Route path="/Contact">
        <Contact />
      </Route>
      <Route path="/Services">
        <Services />
      </Route>
    </div>
  );
}
export default AllRoutes;
