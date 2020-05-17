import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { Icon, Button, IconButton } from '@material-ui/core';

function Iconos() {
    return (
        <div>
            {/* Iconos de Materia UI */}
            <DeleteIcon
                color="primary"
            />
            {/* Iconos del core de Material UI */}
            <Icon
                fontSize="large"
            >
                start
            </Icon>
            {/* Boton con atributo startIcon donde se le pasa un componente DeleteIcon */}
            <Button
                color="secondary"
                variant="contained"
                startIcon={<DeleteIcon />}
            >
                Delete
            </Button>
            {/* Boton con atributo endIcon donde se le pasa un componente Icon */}
            <Button
                color="secondary"
                variant="contained"
                endIcon={<Icon>
                    start
                </Icon>}
            >
                Start
            </Button>
            {/* IconButton es un icono que funciona como boton */}
            <IconButton
                aria-label="delete"
            >
                <DeleteIcon
                    color="primary"
                />
            </IconButton>
        </div>
    )
}

export default Iconos;