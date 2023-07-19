import React, { forwardRef } from "react";
import { useColor } from "../context/ColorContext";
import "../styles/About.css";

const About = (props, ref) => {

    const {primaryColor, textColor} = useColor();
    return (
        <div className="about" style={ {backgroundColor: primaryColor} } ref={ref}>
            <div className="about__header">
                <h1 style={ {color: textColor} }>About</h1>
            </div>

            <div className="about__content">
                <p style={ {color: textColor} }>PalettePix is a place where designers and developers can quickly test out color palettes to get an idea of how their websites would look. It is designed to help you explore and experiment with different color combinations for your creative projects.
                    <br />
                    <br />
                    You can mix and match hues, explore various palettes, and find inspiration from trending color schemes. Happy exploring!</p>
            </div>

        </div>
    );
}

export default forwardRef(About);
