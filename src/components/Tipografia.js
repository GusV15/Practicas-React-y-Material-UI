import React from 'react';
import Typography from '@material-ui/core/Typography'

function Tipografia() {
    return(
        <div>
            {/* Tipografia
                variant -> tipo de etiqueta
                color -> color de texto
                align -> ubicacion horizontal del texto
                paragraph -> le da margen al texto
            */}
            <Typography variant="h1" color="primary">
                ssdsdfdfds
            </Typography>
            <Typography align="center" variant="body1" color="secondary" paragraph>
                lorem
            </Typography>
            <Typography align="center" variant="body1" color="primary">
                lorem
            </Typography>
        </div>
    )
}

export default Tipografia;