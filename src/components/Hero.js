import React, { forwardRef } from "react";
import CubesImg from "../assets/cubes.jpg";
import { useColor } from "../context/ColorContext";
import "../styles/Hero.css";
import "../styles/index.css";

const Hero =  (props,ref) => {

    const {setToggleForm} = props;
    const { palette } = useColor();

   return (
         <div className="hero color-transition" style={ {backgroundColor: palette.primaryColor} } ref={ref}>

            <div className="hero__content">
                <h1 style={ {color: palette.textColor} }>Discover. Visualize. Experiment.</h1>
                <button style={ {backgroundColor: palette.secondaryColor, color: palette.textColor} } onClick={() => setToggleForm(true)}>Change palette</button>
            </div>


            <div className="hero__img">
                <img src={CubesImg} alt="" />
            </div>

        </div>
  )
}

export default forwardRef(Hero);
