//import logo from './logo.svg';
import "./App.css";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
//  import Employee from "./components/Employee";
import Employees from "./components/Employees";
// import Person from "./components/Person";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <div className="container">
        <Employees />
        <br></br>
      </div>
      <div className="row">
        <div className="col-lg-3">
          <Sidebar />
        </div>
        <div className="col-lg-9">
          <Home />
        </div>
      </div>
      <br></br>
      <Footer />
    </div>
  );
}

export default App;
