import ReactDOM from 'react-dom';
import './index.scss';
import BoxFormView from './containers/BoxFormView';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme  from './theme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <BoxFormView />
  </ThemeProvider>,
  document.getElementById('root')
);