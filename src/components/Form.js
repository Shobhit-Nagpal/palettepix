import React, { useState } from "react";
import { useColor } from "../context/ColorContext";
import { Sketch, Chrome } from "@uiw/react-color";
import ColorizeIcon from '@mui/icons-material/Colorize';
import CloseIcon from '@mui/icons-material/Close';
import "../styles/Form.css";

const Form = (props) => {

    const {setToggleForm} = props;
    const {primaryColor, secondaryColor, tertiaryColor, textColor, setPrimaryColor, setSecondaryColor, setTertiaryColor, setTextColor} = useColor();
    
    const [showPrimaryColorPicker, setShowPrimaryColorPicker] = useState(false);
    const [showSecondaryColorPicker, setShowSecondaryColorPicker] = useState(false);
    const [showTertiaryColorPicker, setShowTertiaryColorPicker] = useState(false);
    const [showTextColorPicker, setShowTextColorPicker] = useState(false);

   return (
        <div className="form__container">
            <h1 className="form__container__header">Pick your colors</h1>
            <label htmlFor="primary_color">Primary Color</label> <br />
            <input type="text" id="primary_color" name="Primary Color" value={primaryColor} onChange={e => setPrimaryColor(e.target.value)}></input>
            {showPrimaryColorPicker ? 
                <>
                    <CloseIcon onClick={() => setShowPrimaryColorPicker(false)} />
                    <div className="primary_color_picker">
                        <Chrome color={primaryColor} onChange={color => setPrimaryColor(color.hex)} />
                    </div>
                </>
             : 
                <>
                    <ColorizeIcon sx={ {color: tertiaryColor} } onClick={() => setShowPrimaryColorPicker(true)} />
                </>
            }

            <br />
            <br />
        
            <label htmlFor="secondary_color">Secondary Color</label> <br />
            <input type="text" id="secondary_color" name="Secondary Color" value={secondaryColor} onChange={e => setSecondaryColor(e.target.value)}></input>
            {showSecondaryColorPicker ? 
                <>
                    <CloseIcon onClick={() => setShowSecondaryColorPicker(false)} />
                    <div className="secondary_color_picker">
                        <Chrome color={secondaryColor} onChange={color => setSecondaryColor(color.hex)} />
                    </div>
                </>
             : 
                <>
                    <ColorizeIcon sx={ {color: tertiaryColor} } onClick={() => setShowSecondaryColorPicker(true)} />
                </>
            }

 
            <br />
            <br />
        

            <label htmlFor="tertiary_color">Tertiary Color</label> <br />
            <input type="text" id="tertiary_color" name="Tertiary Color" value={tertiaryColor} onChange={e => setTertiaryColor(e.target.value)}></input>
            {showTertiaryColorPicker ? 
                <>
                    <CloseIcon onClick={() => setShowTertiaryColorPicker(false)} />
                    <div className="tertiary_color_picker">
                        <Chrome color={tertiaryColor} onChange={color => setTertiaryColor(color.hex)} />
                    </div>
                </>
             : 
                <>
                    <ColorizeIcon sx={ {color: tertiaryColor} } onClick={() => setShowTertiaryColorPicker(true)} />
                </>
            }

 
            <br />
            <br />
        

            <label htmlFor="text_color">Text color</label> <br />
            <input type="text" id="text_color" name="Text color" value={textColor} onChange={e => setTextColor(e.target.value)}></input>
            {showTextColorPicker ? 
                <>
                    <CloseIcon onClick={() => setShowTextColorPicker(false)} />
                    <div className="text_color_picker">
                        <Chrome color={textColor} onChange={color => setTextColor(color.hex)} />
                    </div>
                </>
             : 
                <>
                    <ColorizeIcon sx={ {color: tertiaryColor} } onClick={() => setShowTextColorPicker(true)} />
                </>
            }


            <br />
            <br />
        

            <button className="form__container__changeBtn" onClick={() => setToggleForm(false)} style={ {backgroundColor:'#8B19D1'} }>Close</button>
        </div>
    )
}

export default Form;
