import React from "react";
import { StylesProvider } from "@material-ui/styles";
import {
  ThemeProvider as MuiThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { ThemeProvider } from "styled-components";
import { green, grey, red } from '@material-ui/core/colors';

const rawTheme = createMuiTheme({
  palette: {
    primary: {
      light: '#69696a',
      main: '#28282a',
      dark: '#1e1e1f',
    },
    secondary: {
      light: '#fff5f8',
      main: '#ff3366',
      dark: '#e62958',
    },
    warning: {
      main: '#ffc071',
      dark: '#ffb25e',
    },
    error: {
      xLight: red[50],
      main: red[500],
      dark: red[700],
    },
    success: {
      xLight: green[50],
      main: green[500],
      dark: green[700],
    },
  },
  typography: {
    fontFamily: "'Work Sans', sans-serif",
    fontSize: 14,
    fontWeightLight: 300, // Work Sans
    fontWeightRegular: 400, // Work Sans
    fontWeightMedium: 700, // Roboto Condensed
    fontFamilySecondary: "'Roboto Condensed', sans-serif",
  },
});

const fontHeader = {
  color: rawTheme.palette.text.primary,
  fontWeight: rawTheme.typography.fontWeightMedium,
  fontFamily: rawTheme.typography.fontFamilySecondary,
  textTransform: 'uppercase',
};

const theme = {
  ...rawTheme,
  palette: {
    ...rawTheme.palette,
    background: {
      ...rawTheme.palette.background,
      default: rawTheme.palette.common.white,
      placeholder: grey[200],
    },
  },
  typography: {
    ...rawTheme.typography,
    fontHeader,
    h1: {
      ...rawTheme.typography.h1,
      ...fontHeader,
      letterSpacing: 0,
      fontSize: 60,
    },
    h2: {
      ...rawTheme.typography.h2,
      ...fontHeader,
      fontSize: 48,
    },
    h3: {
      ...rawTheme.typography.h3,
      ...fontHeader,
      fontSize: 42,
    },
    h4: {
      ...rawTheme.typography.h4,
      ...fontHeader,
      fontSize: 36,
    },
    h5: {
      ...rawTheme.typography.h5,
      fontSize: 20,
      fontWeight: rawTheme.typography.fontWeightLight,
    },
    h6: {
      ...rawTheme.typography.h6,
      ...fontHeader,
      fontSize: 18,
    },
    subtitle1: {
      ...rawTheme.typography.subtitle1,
      fontSize: 18,
    },
    body1: {
      ...rawTheme.typography.body2,
      fontWeight: rawTheme.typography.fontWeightRegular,
      fontSize: 16,
    },
    body2: {
      ...rawTheme.typography.body1,
      fontSize: 14,
    },
  },
};

export const AppDecorator = ({
  i18nConfig = {},
  text = {
    en: {
      translation: { name: "This is a long name text." },
    },
  },
}) => {
  i18n.use(initReactI18next).init({
    ...{
      resources: text,
      fallbackLng: "en",
      debug: false,
      lng: "en",
      keySeparator: false,
      interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
      },
      parseMissingKeyHandler: (key) =>
        (key[0].toUpperCase() + key.slice(1)).replace(/_/, " "),
      react: {
        bindI18n: false,
        transSupportBasicHtmlNodes: false,
        useSuspense: false,
      },
    },
    ...i18nConfig,
  });

  return function decorator(Application) {
    return (
      <StylesProvider injectFirst>
        <MuiThemeProvider {...{ theme }}>
          <ThemeProvider {...{ theme }}>
            <CssBaseline />
            {<Application />}
          </ThemeProvider>
        </MuiThemeProvider>
      </StylesProvider>
    );
  };
};
