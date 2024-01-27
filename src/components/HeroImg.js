import React, { memo } from "react";

const HeroImg = memo(function Image(props) {
    return <img src={props.src} alt="Image of a cube floating" />
});

export default HeroImg;
