import React from 'react';
import NavBar from './NavBar';
import Cajon from './Cajon';
// import Cajita from './Cajita';
import {
    makeStyles, Hidden
} from '@material-ui/core'
import Cuadricula from './Cuadricula';

const estilos = makeStyles(theme => ({
    root: {
        display: 'flex'
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    }
}))

const Contenedor = () => {

    const classes = estilos();
    const [abrir, setAbrir] = React.useState(false);

    const accionAbrir = () => {
        setAbrir(!abrir);
    }

    return (
        <div className={classes.root}>
            <NavBar accionAbrir={accionAbrir}/>
            <Hidden xsDown>
                <Cajon
                    variant="permanent"
                    open={true}
                />
            </Hidden>
            <Hidden mdUp>
                <Cajon
                    variant="temporary"
                    open={abrir}
                    onClose={accionAbrir}
                />
            </Hidden>
            <div className={classes.content} >
                {/* El siguiente div realiza el alto dinamico del toolbar */}
                <div className={classes.toolbar}></div>
                {/*<Cajita />*/}
                <Cuadricula />
            </div>
        </div>
    )
};

export default Contenedor;