import React from "react";
import { useColor } from "../context/ColorContext";
import "../styles/Form.css";

const Form = (props) => {

    const {setToggleForm} = props;
    const {primaryColor, secondaryColor, tertiaryColor, textColor, setPrimaryColor, setSecondaryColor, setTertiaryColor, setTextColor} = useColor();

   return (
        <div className="form__container">
            <h1 className="form__container__header">Pick your colors</h1>
            <label htmlFor="primary_color">Primary Color</label> <br />
            <input type="text" id="primary_color" name="Primary Color" value={primaryColor} onChange={e => setPrimaryColor(e.target.value)}></input>
            <input type="color" id="primary_color_picker" value={primaryColor} onChange={e => setPrimaryColor(e.target.value)}></input>

            <br />
            <br />
        
            <label htmlFor="secondary_color">Secondary Color</label> <br />
            <input type="text" id="secondary_color" name="Secondary Color" value={secondaryColor} onChange={e => setSecondaryColor(e.target.value)}></input>
            <input type="color" id="secondary_color_picker" value={secondaryColor} onChange={e => setSecondaryColor(e.target.value)}></input>

            <br />
            <br />
        

            <label htmlFor="tertiary_color">Tertiary Color</label> <br />
            <input type="text" id="tertiary_color" name="Tertiary Color" value={tertiaryColor} onChange={e => setTertiaryColor(e.target.value)}></input>
            <input type="color" id="tertiary_color_picker" value={tertiaryColor} onChange={e => setTertiaryColor(e.target.value)}></input>

            <br />
            <br />
        

            <label htmlFor="text_color">Text color</label> <br />
            <input type="text" id="text_color" name="Text color" value={textColor} onChange={e => setTextColor(e.target.value)}></input>
            <input type="color" id="tertiary_color_picker" value={textColor} onChange={e => setTextColor(e.target.value)}></input>

            <br />
            <br />
        

            <button className="form__container__changeBtn" onClick={() => setToggleForm(false)} style={ {backgroundColor:'#8B19D1'} }>Close</button>
        </div>
    )
}

export default Form;
