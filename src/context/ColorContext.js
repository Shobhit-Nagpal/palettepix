import React, {useState, useContext} from "react";

const ColorContext = React.createContext();

const useColor = () => {
    return useContext(ColorContext);
}

const ColorProvider = ( {children} ) => {
 
    const [palette, setPalette] = useState({
                                    primaryColor: "#121212",
                                    secondaryColor: "#8B19D1",
                                    tertiaryColor: "#4123D7",
                                    textColor: "#FFFFFF"
                                        });

    return (
        <ColorContext.Provider value={{ palette, setPalette }}>
            {children}
        </ColorContext.Provider>
    )

}

export {ColorProvider, useColor};
