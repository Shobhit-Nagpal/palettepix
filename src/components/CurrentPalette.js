import React from "react";
import { useColor } from "../context/ColorContext";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
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

            <div className="current_palette_info_container">
                <div className="current_palette_info">
                    <h3 style={ {color: textColor} }>Primary: {primaryColor}</h3>
                    <ContentCopyIcon style={ {fill:textColor} } onClick={() => navigator.clipboard.writeText(primaryColor)} />
                </div>

                <div className="current_palette_info">
                    <h3 style={ {color: textColor} }>Secondary: {secondaryColor}</h3>
                    <ContentCopyIcon style={ {fill: textColor} } onClick={() => navigator.clipboard.writeText(secondaryColor)} />
                </div>

                <div className="current_palette_info">
                    <h3 style={ {color: textColor} }>Tertiary: {tertiaryColor}</h3>
                    <ContentCopyIcon style={ {fill: textColor} } onClick={() => navigator.clipboard.writeText(tertiaryColor)} />
                </div>

                <div className="current_palette_info">
                    <h3 style={ {color: textColor} }>Text: {textColor}</h3>
                    <ContentCopyIcon style={ {fill: textColor} } onClick={() => navigator.clipboard.writeText(textColor)} />
                </div>
            </div>


        </div>
    );
}

export default CurrentPalette;
