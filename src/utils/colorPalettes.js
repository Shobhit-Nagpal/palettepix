const colorPalettes = [
    {primaryColor: "#121212", secondaryColor: "#8B19D1", tertiaryColor: "#4123D7", textColor: "#FFFFFF"},
    {primaryColor: "#E3f2FD", secondaryColor: "#4FC3F7", tertiaryColor: "#AB47BC", textColor: "#101010"},
    {primaryColor: "#ABC270", secondaryColor: "#FEC868", tertiaryColor: "#FDA769", textColor: "#121212"},
    {primaryColor: "#FFF7EF", secondaryColor: "#FF4C54", tertiaryColor: "#FFCB00", textColor: "#121212"},
    {primaryColor: "#EFEFF0", secondaryColor: "#7DDE92", tertiaryColor: "#55D6C2", textColor: "#121212"},
    {primaryColor: "#6D685C", secondaryColor: "#FF9000", tertiaryColor: "#55D6C2", textColor: "#F9FAFB"},
    {primaryColor: "#F0FFFC", secondaryColor: "#34C4AC", tertiaryColor: "#0641A5", textColor: "#121212"},
    {primaryColor: "#E8FCFD", secondaryColor: "#F89DA7", tertiaryColor: "#0D37FB", textColor: "#121212"},
    {primaryColor: "#232323", secondaryColor: "#94C90F", tertiaryColor: "#FF6F5E", textColor: "#F9FAFB"},
    {primaryColor: "#2D2C2E", secondaryColor: "#FBBD0D", tertiaryColor: "#FD14FA", textColor: "#FAF5E6"},
    {primaryColor: "#292929", secondaryColor: "#4871F7", tertiaryColor: "#F7D448", textColor: "#FAF5E6"},
];

const getRandomPalette = () => {
    const index = Math.floor(Math.random() * (colorPalettes.length - 0));
    return colorPalettes[index];
}

export {getRandomPalette};
