import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

import { createVuetify, ThemeDefinition } from "vuetify";

const lightTheme: ThemeDefinition = {
  dark: false,
  // colors: {
  //   background: "#FFFFFF",
  //   surface: "#FFFFFF",
  //   primary: "#6200EA",
  //   "primary-darken-1": "#3700B3",
  //   secondary: "#03DAC6",
  //   "secondary-darken-1": "#018786",
  //   error: "#B00020",
  //   info: "#2196F3",
  //   success: "#4CAF50",
  //   warning: "#FB8C00",
  // },
};

const darkTheme: ThemeDefinition = {
  dark: true,
  // colors: {
  //   background: "#121212",
  //   surface: "#121212",
  //   primary: "#FFAB00",
  //   "primary-darken-1": "#FFAB00",
  //   secondary: "#03DAC6",
  //   "secondary-darken-1": "#03DAC6",
  //   error: "#CF6679",
  //   info: "#2196F3",
  //   success: "#4CAF50",
  //   warning: "#FB8C00",
  // },
};

export default createVuetify({
  theme: {
    defaultTheme: "lightTheme",
    themes: {
      lightTheme,
      darkTheme,
    },
  },
});
