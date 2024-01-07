import React, { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import '../styles/Navbar.css';
import "../styles/index.css";
import { useColor } from "../context/ColorContext";


const Navbar = (props) => {

  const [toggleMenu, setToggleMenu] = useState(false);
  const { palette } = useColor();

  const {handleFeaturesClick, handleAboutClick, handleHomeClick} = props;
  
  return (
    <div className="navbar color-transition" style={ {backgroundColor: palette.secondaryColor} }>
	  <div className="navbar__logo">
	  	<p  style={ {color: palette.textColor} } onClick={ () => {handleHomeClick()} }>[pal.pix]</p>
	  </div>

	  <div className="navbar__links">
        <p style={ {color: palette.textColor} } onClick={() => handleHomeClick()}>Home</p>
        <p style={ {color: palette.textColor} } onClick={() => handleAboutClick()}>About</p>
	    <p style={ {color: palette.textColor} } onClick={() => handleFeaturesClick()}>Features</p>
	  </div>

	  <div className="navbar__menu">
	  	{toggleMenu ? <CloseIcon style={{fill: palette.textColor}} fontSize="large" onClick={() => setToggleMenu(false)} /> : <MenuIcon style={{fill: palette.textColor}} fontSize="large" onClick={() => setToggleMenu(true)		                                                                                                             }/>}

                {toggleMenu && (
                    <div className="navbar__menu__container"  style={ {backgroundColor: palette.primaryColor, borderColor: palette.secondaryColor, borderWidth: '0.2rem', borderStyle: 'solid'} }>
                        <p style={ {color: palette.textColor} } onClick={() => handleHomeClick()}>Home</p>
                        <p style={ {color: palette.textColor} } onClick={() => handleAboutClick()}>About</p>
	                    <p style={ {color: palette.textColor} } onClick={() => handleFeaturesClick()}>Features</p>

                    </div>
                )}
	  </div>
    </div>
  );
}

export default Navbar;
