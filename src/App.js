import React, { useState } from "react";
import { ColorProvider } from "./context/ColorContext";
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
  return (
        <div className="App">
             <ColorProvider>

                {toggleForm ? <Form toggleForm={toggleForm} setToggleForm={setToggleForm} /> : (null)}
                <Navbar />
                <Hero setToggleForm={setToggleForm} />
                <Features />
                <Pricing />
                <Footer />
             </ColorProvider>
        </div>
  );
}

export default App;
