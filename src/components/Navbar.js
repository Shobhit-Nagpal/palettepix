import React, { useState, useRef} from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import '../styles/Navbar.css';
import { useColor } from "../context/ColorContext";


const Navbar = (props) => {

  const [toggleMenu, setToggleMenu] = useState(false);
  const {primaryColor, secondaryColor, textColor} = useColor();

  const {handleFeaturesClick, handleAboutClick, handleHomeClick} = props;
  
  return (
    <div className="navbar" style={ {backgroundColor: secondaryColor} }>
	  <div className="navbar__logo">
	  	<p  style={ {color: textColor} } onClick={ () => {handleHomeClick()} }>[pal.pix]</p>
	  </div>

	  <div className="navbar__links">
        <p style={ {color: textColor} } onClick={() => handleHomeClick()}>Home</p>
        <p style={ {color: textColor} } onClick={() => handleAboutClick()}>About</p>
	    <p style={ {color: textColor} } onClick={() => handleFeaturesClick()}>Features</p>
	  </div>

	  <div className="navbar__menu">
	  	{toggleMenu ? <CloseIcon style={{fill: textColor}} fontSize="large" onClick={() => setToggleMenu(false)} /> : <MenuIcon style={{fill: textColor}} fontSize="large" onClick={() => setToggleMenu(true)		                                                                                                             }/>}

                {toggleMenu && (
                    <div className="navbar__menu__container"  style={ {backgroundColor: primaryColor} }>
                        <p style={ {color: textColor} } onClick={() => handleHomeClick()}>Home</p>
                        <p style={ {color: textColor} } onClick={() => handleAboutClick()}>About</p>
	                    <p style={ {color: textColor} } onClick={() => handleFeaturesClick()}>Features</p>

                    </div>
                )}
	  </div>
    </div>
  );
}

export default Navbar;
