import React, { forwardRef } from "react";
import CubesImg from "../assets/cubes.jpg";
import { useColor } from "../context/ColorContext";
import "../styles/Hero.css";
import "../styles/index.css";
import HeroImg from "./HeroImg";

const Hero = (props, ref) => {
  const { setToggleForm } = props;
  const { palette } = useColor();

  return (
    <div
      className="hero color-transition"
      style={{ backgroundColor: palette.primaryColor }}
      ref={ref}
    >
      <div className="hero__content">
        <h1 style={{ color: palette.textColor }}>
          Discover. Visualize. Experiment.
        </h1>
        <button
          style={{
            backgroundColor: palette.secondaryColor,
            color: palette.textColor,
          }}
          onClick={() => setToggleForm(true)}
        >
          Change palette
        </button>
      </div>

      <div className="hero__img">
        <HeroImg src={CubesImg} />
      </div>
    </div>
  );
};

export default forwardRef(Hero);
