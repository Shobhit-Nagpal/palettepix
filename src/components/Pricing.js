import React from "react";
import { useColor } from "../context/ColorContext";
import "../styles/Pricing.css";

const Pricing = () => {
    const {primaryColor, textColor} = useColor();
    return (
        <div className="pricing" style={ {backgroundColor: primaryColor} }>
            <div className="pricing__header">
                <h1 style={ {color: textColor} }>Pricing</h1>
            </div>

            <div className="pricing__content">
                <p style={ {color: textColor} }>This is free to use.</p>
            </div>
        </div>
    )
}

export default Pricing;
