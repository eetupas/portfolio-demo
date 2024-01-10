import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3498db', // Blue
    },
    secondary: {
      main: '#1abc9c', // Turquoise
    },
    error: {
      main: '#e74c3c', // Red (for example)
    },
    background: {
      default: '#f8f9fa', // Light gray background
    },
  },
  typography: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: 20,
    h6: {
      fontFamily: "'Roboto', sans-serif;",
      // Additional styles for h6...
    },
    h5: {
      fontFamily: "'Roboto', sans-serif;",
      // Additional styles for h5...
    },
    h4: {
      fontFamily: "'Roboto', sans-serif;",
      // Additional styles for h4...
    },
    h3: {
      fontFamily: "'Roboto', sans-serif;",
      // Additional styles for h3...
    },
    h2: {
      fontFamily: "'Roboto', sans-serif;",
      // Additional styles for h2...
    },
    h1: {
      fontFamily: "'Roboto', sans-serif;",
      // Additional styles for h1...
      '@media (max-width:1500px)': {
        fontSize: '6rem', // Adjusted font size for h1 on smaller screens
      },
      '@media (max-width:1000px)': {
        fontSize: '4.5rem', // Adjusted font size for h1 on even smaller screens
      },
    },
  },
});

export default theme;