import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './temaConfig';
import Contenedor from './components/Contenedor';

function App() {
  return (
    <div>
      {/* Button
      
          color -> color de texto
          variant -> color de fondo
          disableElevation -> elimina sombra
          href -> agrega enlace
          fullWidth -> toma el 100% del ancho
          size -> tamaño de boton    
      */}
      {/*
      <Button color="secondary">
        Hola
      </Button>
      <Button variant="contained" color="primary">
        contained
      </Button>
      <Button 
        variant="contained" 
        color="primary"
        disableElevation
      >
        disableElevation
      </Button>
      <Button 
        variant="contained" 
        color="primary"
        href="http://google.com"
      >
        outlined
      </Button>
      <Button 
        variant="contained" 
        color="primary"
        fullWidth
      >
        fullWidth
      </Button>
      <Button 
        variant="contained" 
        color="primary"
        size="large"
      >
        size
      </Button>

      <Iconos />

      <Tipografia />

      <EstilosPersonalizados />
      */}
      <ThemeProvider theme={theme}>
        <Contenedor />
      </ThemeProvider>
    </div>
  );
}

export default App;
