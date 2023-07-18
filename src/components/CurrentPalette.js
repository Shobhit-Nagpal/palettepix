import React from "react";
import { useColor } from "../context/ColorContext";
import "../styles/CurrentPalette.css";

const CurrentPalette = () => {

    const {primaryColor, secondaryColor, tertiaryColor, textColor} = useColor();
    return (
        <div className="current_palette" style={ {backgroundColor: primaryColor} }>

            <div className="current_palette_header">
                <h1 style={ {color: textColor} }>Current palette</h1>
            </div>

            <div className="current_palette_colors">
                <div style={ {backgroundColor: primaryColor, borderWidth: '1px', borderStyle:'solid', borderColor: textColor, width: '10rem', height: '3rem'} }></div>
                <div style={ {backgroundColor: secondaryColor, borderWidth:'1px', borderStyle:'solid', borderColor: textColor, width: '5rem', height: '3rem'} }></div>
                <div style={ {backgroundColor: tertiaryColor, borderWidth:'1px', borderStyle:'solid', borderColor: textColor, width: '2rem', height: '3rem'} }></div>
                <div style={ {backgroundColor: textColor, borderWidth:'1px', borderStyle:'solid', borderColor: textColor, width: '1rem', height: '3rem'} }></div>
            </div>


        </div>
    );
}

export default CurrentPalette;
