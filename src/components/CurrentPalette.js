import React, { useState, useEffect } from "react";
import { useColor } from "../context/ColorContext";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import "../styles/CurrentPalette.css";
import { getRandomPalette } from "../utils/colorPalettes";

const CurrentPalette = () => {

    const {primaryColor, secondaryColor, tertiaryColor, textColor, setPrimaryColor, setSecondaryColor, setTertiaryColor, setTextColor} = useColor();

    const [colorCopied, setColorCopied] = useState("");

    const handleCopyClick = (color) => {
        navigator.clipboard.writeText(color);
        setColorCopied(color);
    }

    const handleClick = () => {
        const palette = getRandomPalette();
        setPrimaryColor(palette.primaryColor);
        setSecondaryColor(palette.secondaryColor);
        setTertiaryColor(palette.tertiaryColor);
        setTextColor(palette.textColor);
    }

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setColorCopied("")
        }, 1500);

        return () => {
            clearTimeout(timeoutId);
        }
    }, [colorCopied]);

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
                    {colorCopied === primaryColor ? <CheckCircleIcon style={ {fill: tertiaryColor} } /> : <ContentCopyIcon style={ {fill:tertiaryColor} } onClick={() => handleCopyClick(primaryColor)} />}
                </div>

                <div className="current_palette_info">
                    <h3 style={ {color: textColor} }>Secondary: {secondaryColor}</h3>
                    {colorCopied === secondaryColor ? <CheckCircleIcon style={ {fill: tertiaryColor} } />: <ContentCopyIcon style={ {fill: tertiaryColor} } onClick={() => handleCopyClick(secondaryColor)} />}
                </div>

                <div className="current_palette_info">
                    <h3 style={ {color: textColor} }>Tertiary: {tertiaryColor}</h3>
                    {colorCopied === tertiaryColor ? <CheckCircleIcon style={ {fill: tertiaryColor} } /> : <ContentCopyIcon style={ {fill: tertiaryColor} } onClick={() => handleCopyClick(tertiaryColor)} />}
                </div>

                <div className="current_palette_info">
                    <h3 style={ {color: textColor} }>Text: {textColor}</h3>
                    {colorCopied === textColor ? <CheckCircleIcon style={ {fill: tertiaryColor} } /> : <ContentCopyIcon style={ {fill: tertiaryColor} } onClick={() => handleCopyClick(textColor)} />}
                </div>
            </div>

            <div className="randomize_palette_btn">
                <button style = { {backgroundColor: secondaryColor, color: textColor} } onClick={() => handleClick()}>Randomize palette</button>
            </div>

        </div>
    );
}

export default CurrentPalette;