import React from "react";
import {FaGithub, FaLinkedin, FaTwitter} from "react-icons/fa";
import GitHubIcon from '@mui/icons-material/GitHub';
import { useColor } from "../context/ColorContext";
import "../styles/Footer.css";

const Footer = () => {
    const { palette } = useColor();
    return (
        <div className="footer" style={ {backgroundColor: palette.primaryColor} }>
            <div className="footer_info">
                <p style={ {color: palette.textColor} }>Made by Shobhit Nagpal</p>
                <p style={ {color: palette.textColor} }>Copyright &#169; 2023</p>
            </div>

            <div className="footer_links">
                <a href="https://github.com/Shobhit-Nagpal" target="_blank" rel="noreferrer"><FaGithub className="footer_links_icon" style={ {color: palette.tertiaryColor} } /></a>
                <a href="https://www.linkedin.com/in/shobhitnagpal/" target="_blank" rel="noreferrer"><FaLinkedin className="footer_links_icon" style={ {color: palette.tertiaryColor} } /></a>
                <a href="https://www.twitter.com/shbhtngpl" target="_blank" rel="noreferrer"><FaTwitter className="footer_links_icon" style={ {color: palette.tertiaryColor} } /></a>
            </div>
        </div>
    )
}

export default Footer;
