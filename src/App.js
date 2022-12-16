import "./App.css";
import React from "react";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Home from "./components/home";
import NavBar from "./components/navBar";
import axios from "axios";

import About from "./components/about";
import Background from "./components/background";
import Services from "./components/services";
import Agents from "./components/agents";
import Wild from "./components/wild";

function App() {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    const dataFetch = async () => {
      await axios
        .get("https://afrifahariltd.herokuapp.com/api/products/")
        .then((res) => {
          setData(res.data);
        });
    };
    dataFetch();
  }, [data]);
  return (
    <div className=" w-screen">
      <NavBar />
      <Home />
      <About />
      {/* <Background /> */}
      <Services />
      <Wild />
      <Agents data={data} />

      <Contact />
      <Footer />
    </div>
  );
}

export default App;
