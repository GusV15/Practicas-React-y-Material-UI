import React from 'react';
import {Grid, Box} from '@material-ui/core'

const Cuadricula = () => {
    return (
        <Grid container>
            <Grid item xs={12} md={6}>
                <Box border={2}>
                    Caja 1
                </Box>
            </Grid>
            <Grid item xs={12} md={6}>
                <Box border={2}>
                    Caja 2
                </Box>
            </Grid>
        </Grid>
    )
}

export default Cuadricula;