const styles = {
  fonts: {
    heading: `'Caveat', cursive`,
    primary: `"Verela Round", sans-serif`,
  },
};
// Dark Theme
export const darkTheme = {
  title: "Main",
  primary: `#ffffff`,
  secondary: `#0DD3C9`,
  info: `#0DD3C9`,
  dark: `black`,
  text: `#ffffff`,
  bgColor: `linear-gradient(
      344deg,
      #0e0e0e 0%,
      #252525 100%
    )`,
  ...styles,
};
export const lightTheme = {
    title: "Main",
    primary: `#000000`,
    secondary: `#0DD3C9`,
    info: `#0DD3C9`,
    dark: `black`,
    text: `#000000`,
    bgColor: `linear-gradient(
        344deg,
        #ffffff 0%,
        #f0f0f0 100%
      )`,
    ...styles,
  };
