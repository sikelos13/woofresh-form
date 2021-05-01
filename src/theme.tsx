import red from '@material-ui/core/colors/red';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#609286',
      dark: '#005648'
    },
    secondary: {
      main: '#fff',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#dbe6dc',
    },
  },
    overrides: {
      MuiButton: {
        containedPrimary: {
          color: '#ffffff',
        },
      }
    }
});

export default theme;