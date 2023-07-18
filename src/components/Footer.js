import React from "react";
import {FaGithub, FaLinkedin, FaTwitter} from "react-icons/fa";
import { useColor } from "../context/ColorContext";
import "../styles/Footer.css";

const Footer = () => {
    const {primaryColor, secondaryColor, textColor} = useColor();
    return (
        <div className="footer" style={ {backgroundColor: primaryColor} }>
            <div className="footer_info">
                <p style={ {color: textColor} }>Made by Shobhit Nagpal</p>
                <p style={ {color: textColor} }>Copyright &#169; 2023</p>
            </div>

            <div className="footer_links">
                <a href="https://github.com/Shobhit-Nagpal" target="_blank" rel="noreferrer"><FaGithub className="footer_links_icon" style={ {color: secondaryColor} } /></a>
                <a href="https://www.linkedin.com/in/shobhitnagpal/" target="_blank" rel="noreferrer"><FaLinkedin className="footer_links_icon" style={ {color: secondaryColor} } /></a>
                <a href="https://www.twitter.com/shbhtngpl" target="_blank" rel="noreferrer"><FaTwitter className="footer_links_icon" style={ {color: secondaryColor} } /></a>
            </div>
        </div>
    )
}

export default Footer;
