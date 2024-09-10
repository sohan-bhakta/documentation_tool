import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    fonts: {
        heading: `'Open Sans', sans-serif`, // Set "Open Sans" for headings
        body: `'Open Sans', sans-serif`,    // Set "Open Sans" for body text
      },
  colors: {
    brand: {
      background: '#f4f2ee',
      icon: '#717171',
      container: '#ffffff',
      boldtext: '#1a1a1a',
      medtext: '#2766c2',
      softtext: '#717171',
      button: '#2766c2'
    },
  },
  styles: {
    global: {
      'html, body': {
        bg: 'brand.background',  
        color: 'brand.boldtext',  
        minHeight: '100vh',
        fontFamily: `'Open Sans', sans-serif`, 
      },
    },
  },
});

export default theme;