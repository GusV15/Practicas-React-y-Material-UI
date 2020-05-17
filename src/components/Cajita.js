import React from 'react';
import { Box } from '@material-ui/core';

const Cajita = () => {
    return (
        <div>
            {/* Box se comporta igual a un div */}
            <Box 
                color='primary.main'
            >
                Hola Mundo !
            </Box>
            <Box 
                color='primary.contrastText'
                bgcolor='primary.main'
            >
                Hola Mundo !
            </Box>
            <Box 
                color='primary.contrastText'
                bgcolor='primary.main'
                m={2}
                px={5}
            >
                Hola Mundo !
            </Box>
            <Box 
                m={2}
                p={5}
                border={1}
                borderColor='error.main'
            >
                Hola Mundo !
            </Box>
        </div>
    )
}

export default Cajita;