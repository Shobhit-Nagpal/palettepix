import React from "react";
import { useColor } from "../context/ColorContext";
import "../styles/Form.css";

const Form = (props) => {

    const {setToggleForm} = props;
    const {primaryColor, secondaryColor, tertiaryColor, textColor, setPrimaryColor, setSecondaryColor, setTertiaryColor, setTextColor} = useColor();

    const changeColors = () => {
        const primColor = document.getElementById('primary_color');
        const secColor = document.getElementById('secondary_color');
        const tertColor = document.getElementById('tertiary_color');
        const txtColor = document.getElementById('text_color');

        const colorInputRegex = /^(#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})|[a-zA-Z]+)$/;

        const colors = [primColor, secColor, tertColor, txtColor];

        for (let i = 0 ; i < colors.length ; i++) {
            const color = colors[i];
            if (!colorInputRegex.test(color.value)) {
                alert(`Please check your input for the ${color.name}`);
                return;
            } 
        }

        setPrimaryColor(primColor.value.toLowerCase());
        setSecondaryColor(secColor.value.toLowerCase());
        setTertiaryColor(tertColor.value.toLowerCase());
        setTextColor(txtColor.value.toLowerCase());

        setToggleForm(false);
    }
    return (
        <div className="form__container">
            <h1 className="form__container__header">Pick your colors</h1>
            <label htmlFor="primary_color">Primary Color</label> <br />
            <input type="text" id="primary_color" name="Primary Color" defaultValue={primaryColor}></input>

            <br />
            <br />
        
            <label htmlFor="secondary_color">Secondary Color</label> <br />
            <input type="text" id="secondary_color" name="Secondary Color" defaultValue={secondaryColor}></input>

            <br />
            <br />
        

            <label htmlFor="tertiary_color">Tertiary Color</label> <br />
            <input type="text" id="tertiary_color" name="Tertiary Color" defaultValue={tertiaryColor}></input>

            <br />
            <br />
        

            <label htmlFor="text_color">Text color</label> <br />
            <input type="text" id="text_color" name="Text color" defaultValue={textColor}></input>

            <br />
            <br />
        

            <button className="form__container__changeBtn" onClick={() => changeColors()}>Change color</button>
            <button className="form__container__cancelBtn" onClick={() => setToggleForm(false)}>Cancel</button>
        </div>
    )
}

export default Form;
