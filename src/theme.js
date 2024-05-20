import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#C80D0D',
    },
    secondary: {
      main: '#BFBDBD',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;