import React, {useState} from "react";
import CubesImg from "../assets/cubes.jpg";
import { useColor } from "../context/ColorContext";
import "../styles/Hero.css";

const Hero =  (props) => {

    const {setToggleForm} = props;
    const {primaryColor, secondaryColor, textColor} = useColor();

    return (
         <div className="hero" style={ {backgroundColor: primaryColor} }>

            <div className="hero__content">
                <h1 style={ {color: textColor} }>Discover. Create. Experiment.</h1>
                <button style={ {backgroundColor: secondaryColor, color: textColor} } onClick={() => setToggleForm(true)}>Change palette</button>
            </div>


            <div className="hero__img">
                <img src={CubesImg} alt="" />
            </div>

        </div>
  )
}

export default Hero;
