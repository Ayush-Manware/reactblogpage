import { BrowserRouter } from "react-router-dom";
import "./App.css";
import "./Responsive.css";
import Logo from "./logo/Logo";
import Navbar from "./navbar/Navbar";

function App() {
  return (
    <>
      <BrowserRouter >
        <Logo />
        <Navbar />
      </BrowserRouter>
    </>
  );
}

export default App;
