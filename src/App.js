import React, { useState } from "react";
import { useColor } from "./context/ColorContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Form from "./components/Form";
import Features from "./components/Features";
import "./styles/App.css";
import "./styles/index.css";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

function App() {

    const [toggleForm, setToggleForm] = useState(false);
    const {primaryColor} = useColor();
  return (
        <div className="App" style={ {backgroundColor: primaryColor} }>

                {toggleForm ? <Form toggleForm={toggleForm} setToggleForm={setToggleForm} /> : (null)}
                <Navbar />
                <Hero setToggleForm={setToggleForm} />
                <Features />
                <Pricing />
                <Footer />
        </div>
  );
}

export default App;
