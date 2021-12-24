import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
function Navbar() {
  return (
    <div className={styles.navbar}>
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>
      <Link to="/Login">Login</Link>
      <Link to="/Contact">Contact</Link>
      <Link to="/Services">Services</Link>
    </div>
  );
}

export default Navbar;
