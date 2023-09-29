import React, { useState, useEffect } from "react";
import { useColor } from "../context/ColorContext";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import "../styles/CurrentPalette.css";
import { getRandomPalette } from "../utils/colorPalettes";

const CurrentPalette = () => {

    const { palette, setPalette } = useColor();

    const [colorCopied, setColorCopied] = useState("");

    const handleCopyClick = (color) => {
        navigator.clipboard.writeText(color);
        setColorCopied(color);
    }

    const handleClick = () => {
        let newPalette = getRandomPalette();

        while (JSON.stringify(newPalette) === JSON.stringify(palette)) {

            newPalette = getRandomPalette();
        }
       
        setPalette({
            primaryColor: newPalette.primaryColor,
            secondaryColor: newPalette.secondaryColor,
            tertiaryColor: newPalette.tertiaryColor,
            textColor: newPalette.textColor
        });
    }

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setColorCopied("");
        }, 1500);

        return () => {
            clearTimeout(timeoutId);
        }
    }, [colorCopied]);

    return (
        <div className="current_palette" style={ {backgroundColor: palette.primaryColor} }>

            <div className="current_palette_header">
                <h1 style={ {color: palette.textColor} }>Current palette</h1>
            </div>

            <div className="current_palette_colors">
                <div style={ {backgroundColor: palette.primaryColor, borderWidth: '1px', borderStyle:'solid', borderColor: palette.textColor, width: '10rem', height: '3rem'} }></div>
                <div style={ {backgroundColor: palette.secondaryColor, borderWidth:'1px', borderStyle:'solid', borderColor: palette.textColor, width: '5rem', height: '3rem'} }></div>
                <div style={ {backgroundColor: palette.tertiaryColor, borderWidth:'1px', borderStyle:'solid', borderColor: palette.textColor, width: '2rem', height: '3rem'} }></div>
                <div style={ {backgroundColor: palette.textColor, borderWidth:'1px', borderStyle:'solid', borderColor: palette.textColor, width: '1rem', height: '3rem'} }></div>
            </div>

            <div className="current_palette_info_container">
                <div className="current_palette_info">
                    <h3 style={ {color: palette.textColor} }>Primary: {palette.primaryColor}</h3>
                    {colorCopied === palette.primaryColor ? <CheckCircleIcon style={ {fill: palette.tertiaryColor} } /> : <ContentCopyIcon style={ {fill: palette.tertiaryColor} } onClick={() => handleCopyClick(palette.primaryColor)} />}
                </div>

                <div className="current_palette_info">
                    <h3 style={ {color: palette.textColor} }>Secondary: {palette.secondaryColor}</h3>
                    {colorCopied === palette.secondaryColor ? <CheckCircleIcon style={ {fill: palette.tertiaryColor} } />: <ContentCopyIcon style={ {fill: palette.tertiaryColor} } onClick={() => handleCopyClick(palette.secondaryColor)} />}
                </div>

                <div className="current_palette_info">
                    <h3 style={ {color: palette.textColor} }>Tertiary: {palette.tertiaryColor}</h3>
                    {colorCopied === palette.tertiaryColor ? <CheckCircleIcon style={ {fill: palette.tertiaryColor} } /> : <ContentCopyIcon style={ {fill: palette.tertiaryColor} } onClick={() => handleCopyClick(palette.tertiaryColor)} />}
                </div>

                <div className="current_palette_info">
                    <h3 style={ {color: palette.textColor} }>Text: {palette.textColor}</h3>
                    {colorCopied === palette.textColor ? <CheckCircleIcon style={ {fill: palette.tertiaryColor} } /> : <ContentCopyIcon style={ {fill: palette.tertiaryColor} } onClick={() => handleCopyClick(palette.textColor)} />}
                </div>
            </div>

            <div className="randomize_palette_btn">
                <button style = { {backgroundColor: palette.secondaryColor, color: palette.textColor} } onClick={() => handleClick()}>Randomize palette</button>
            </div>

        </div>
    );
}

export default CurrentPalette;
