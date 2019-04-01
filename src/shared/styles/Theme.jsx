
import React from 'react';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { color } from './color';
import { layout } from './layout';

const theme = createMuiTheme({
  layout,
  color,
  palette: {
    primary: {
      main: '#ffcd50',
    },
    secondary: {
      main: '#3a465a',
    },
    action: {
      disabledBackground: '#ffd77388'
    },
  },
});

const ThemeWrapper = ({ children }) => {
  return (
    <MuiThemeProvider theme={theme}>
      {children}
    </MuiThemeProvider>
  );
};
export default ThemeWrapper;