import React, { useState, useRef } from "react";
import { useColor } from "./context/ColorContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Form from "./components/Form";
import "./styles/App.css";
import "./styles/index.css";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import About from "./components/About";
import CurrentPalette from "./components/CurrentPalette";

function App() {

    const [toggleForm, setToggleForm] = useState(false);
    const {primaryColor} = useColor();

    const featuresRef = useRef(null);
    const aboutRef = useRef(null);
    const homeRef = useRef(null);

    const handleFeaturesClick = () => {
        featuresRef.current?.scrollIntoView({behavior: "smooth"});
    }

    const handleAboutClick = () => {
        aboutRef.current?.scrollIntoView( {behavior: "smooth"} );
    }

    const handleHomeClick = () => {
        homeRef.current?.scrollIntoView( {behavior: "smooth"} );
    }

  return (
        <div className="App" style={ {backgroundColor: primaryColor} }>

                {toggleForm ? <Form toggleForm={toggleForm} setToggleForm={setToggleForm} /> : (null)}
                <Navbar handleFeaturesClick={handleFeaturesClick} handleAboutClick={handleAboutClick} handleHomeClick={handleHomeClick} />
                <Hero ref={homeRef} setToggleForm={setToggleForm} />
                <CurrentPalette />
                <About ref={aboutRef} /> 
                <Features ref={featuresRef} />
                <Pricing />
                <Footer />
        </div>
  );
}

export default App;
