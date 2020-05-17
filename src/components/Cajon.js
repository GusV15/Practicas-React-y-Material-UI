import React from 'react';
import Lista from './Lista';
import {
    makeStyles, Drawer, Divider
} from '@material-ui/core';

const drawerWidth = 240;

const estilos = makeStyles(theme => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
}))

const Cajon = ({variant, open, onClose}) => {

    const classes = estilos();

    return (
        <Drawer 
            className={classes.drawer}
            classes={{
                paper: classes.drawerPaper,
            }}
            anchor="left"
            variant={variant}
            open={open}
            onClose={onClose ? onClose : null}
        >
            <div className={classes.toolbar}></div>
            <Divider />
            <Lista />
        </Drawer>
    )
}

export default Cajon;