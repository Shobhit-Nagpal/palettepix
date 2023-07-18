import React, {useState, useContext} from "react";

const ColorContext = React.createContext();

const useColor = () => {
    return useContext(ColorContext);
}

const ColorProvider = ( {children} ) => {
 
    const [primaryColor, setPrimaryColor] = useState("#121212");
    const [secondaryColor, setSecondaryColor] = useState("#8b19d1");
    const [tertiaryColor, setTertiaryColor] = useState("#8B19D1");
    const [textColor, setTextColor] = useState("#ffffff");

    return (
        <ColorContext.Provider value={{primaryColor, secondaryColor, tertiaryColor, textColor, setPrimaryColor, setSecondaryColor, setTertiaryColor, setTextColor}}>
            {children}
        </ColorContext.Provider>
    )

}

export {ColorProvider, useColor};
