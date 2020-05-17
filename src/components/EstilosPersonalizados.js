import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

// Utilizo makeStyles para agregar estilo CSS a un componente
const useStyle = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
      },
});

function EstilosPersonalizados() {
    // crear una variable y asignarle el useStyle generado
    const classes = useStyle();

    return (
        // Agrego la variable como clase del componente Button
        <Button className={classes.root}>
          MI BOTON PERSONALIZADO
        </Button>
    )
}

export default EstilosPersonalizados;