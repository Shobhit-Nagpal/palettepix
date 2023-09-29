import React, { forwardRef } from "react";
import ExploreIcon from '@mui/icons-material/Explore';
import Polyline from '@mui/icons-material/Polyline';
import SpeedIcon from '@mui/icons-material/Speed';
import "../styles/Features.css";
import { useColor } from "../context/ColorContext";

const Features = (props, ref) => {

    const { palette } = useColor();
    return (
        <div className="features" style={ {backgroundColor: palette.primaryColor} } ref={ref}>

            <div className="features__header">
               <h1 style={ {color: palette.textColor} }>Features</h1>
            </div>

            <div className="features__content">
                <div className="features__content__feature" style={ {backgroundColor: palette.secondaryColor}  }>
                    <ExploreIcon sx={ {color: palette.textColor} } />
                    <p style={ {color: palette.textColor} }>Effortlessly Explore</p>
                </div>

                 <div className="features__content__feature" style={ {backgroundColor: palette.secondaryColor} }>
                    <Polyline sx={ {color: palette.textColor} } />
                    <p style={ {color: palette.textColor} }>Create with confidence</p>
                </div>

                 <div className="features__content__feature" style={ {backgroundColor: palette.secondaryColor} }>
                    <SpeedIcon sx={ {color: palette.textColor} }/>
                    <p style={ {color: palette.textColor} }>Rapid color testing</p>
                </div>
            </div>
        </div>
    )
}

export default forwardRef(Features);
