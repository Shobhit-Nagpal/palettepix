import React from "react";
import { useColor } from "../context/ColorContext";
import "../styles/Pricing.css";
import "../styles/index.css";

const Pricing = () => {
    const { palette } = useColor();
    return (
        <div className="pricing color-transition" style={ {backgroundColor: palette.primaryColor} }>
            <div className="pricing__header">
                <h1 style={ {color: palette.textColor} } id="pricing">Pricing</h1>
            </div>

            <div className="pricing__content">
                <p style={ {color: palette.textColor} }>This is free to use.</p>
            </div>
        </div>
    )
}

export default Pricing;
