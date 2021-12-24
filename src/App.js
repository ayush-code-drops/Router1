import Navbar from "./components/Navbar";
import AllRoutes from "./components/routes/AllRoutes";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
    </div>
  );
}
