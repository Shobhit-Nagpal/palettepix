import React from "react";
import ExploreIcon from '@mui/icons-material/Explore';
import Polyline from '@mui/icons-material/Polyline';
import SpeedIcon from '@mui/icons-material/Speed';
import "../styles/Features.css";
import { useColor } from "../context/ColorContext";

const Features = () => {

    const {primaryColor, secondaryColor, tertiaryColor, textColor} = useColor();
    return (
        <div className="features" style={ {backgroundColor: primaryColor} } >

            <div className="features__header">
                <h1 style={ {color: textColor} }>Features</h1>
            </div>

            <div className="features__content">
                <div className="features__content__feature" style={ {backgroundColor: tertiaryColor}  }>
                    <ExploreIcon sx={ {color: textColor} } />
                    <p style={ {color: textColor} }>Effortlessly Explore</p>
                </div>

                 <div className="features__content__feature" style={ {backgroundColor: tertiaryColor} }>
                    <Polyline sx={ {color: textColor} } />
                    <p style={ {color: textColor} }>Create with confidence</p>
                </div>

                 <div className="features__content__feature" style={ {backgroundColor: tertiaryColor} }>
                    <SpeedIcon sx={ {color: textColor} }/>
                    <p style={ {color: textColor} }>Rapid color testing</p>
                </div>
            </div>
        </div>
    )
}

export default Features;
