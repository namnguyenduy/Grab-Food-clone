const colors = {
  primary: "#26C06A",
  buttons: "#E38B29",
  grey1: "#171010",
  grey2: "#5e6977",
  grey3: "#86939e",
  grey4: "#bdc6cf",
  grey5: "#e1e8ee",
  cardComment: "#86939e",
  cardBackground: "#fff",
  headerText: "#fff",
  lightgreen: "#66DF48",
  yellow: "#FFE15D",
  red: "#E14D2A",
  black: "#000",
};

const parameters = {
  headerHeight: "auto",

  styleButton: {
    width: "100%",
    height: 50,

    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#26C06A",

    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "#26C06A",
  },
  buttonTitleStyle: {
    width: "100%",
    marginTop: -3,
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontsize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
};

const title = {
  color: "#404040",
  fontSize: 20,
  fontWeight: "bold",
};

const fonts = {
  ios: {
    regular: "System",
    light: "System",
    lightItalic: "System",
    bold: "System",
    boldItalic: "System",
    black: "System",
    blackItalic: "System",
  },
  android: {
    regular: "Roboto",
    italic: "Roboto-Italic",
    thin: "Roboto-Thin",
    thinItalic: "Roboto-ThinItalic",
    light: "Roboto-Light",
    lightItalic: "Roboto-LightItalic",
    medium: "Roboto-Medium",
    mediumItalic: "Roboto-MediumItalic",
    bold: "Roboto-Bold",
    boldItalic: "Roboto-BoldItalic",
    condensed: "RobotoCondensed-Regular",
    condensedItalic: "RobotoCondensed-Italic",
  },
};

export { colors, parameters, title, fonts };
