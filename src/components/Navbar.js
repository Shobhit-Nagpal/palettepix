import React, {useState} from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import '../styles/Navbar.css';
import { useColor } from "../context/ColorContext";

const Menu = () => {

  const {textColor} = useColor();
  return(
    <>
	  <p style={ {color: textColor} }>Home</p>
	  <p style={ {color: textColor} }>Features</p>
	  <p style={ {color: textColor} }>Pricing</p>
    </>
  )
}
const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);
  const {primaryColor, secondaryColor, textColor} = useColor();
	
  return (
    <div className="navbar" style={ {backgroundColor: secondaryColor} }>
	  <div className="navbar__logo">
	  	<p  style={ {color: textColor} }>[pal.pix]</p>
	  </div>

	  <div className="navbar__links">
	  	<Menu />
	  </div>

	  <div className="navbar__menu">
	  	{toggleMenu ? <CloseIcon style={{fill: textColor}} fontSize="large" onClick={() => setToggleMenu(false)} /> : <MenuIcon style={{fill: textColor}} fontSize="large" onClick={() => setToggleMenu(true)		                                                                                                             }/>}

                {toggleMenu && (
                    <div className="navbar__menu__container"  style={ {backgroundColor: primaryColor} }>
                        <Menu />
                    </div>
                )}
	  </div>
    </div>
  );
}

export default Navbar;
