import React from 'react';
import { AppBar, Toolbar, Typography, makeStyles, IconButton, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  title: {
    flexGrow: 1
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    }
  },
}));

function NavBar({accionAbrir}) {

  const classes = useStyles();

  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <IconButton color="inherit" aria-label="menu" className={classes.menuButton} onClick={() => accionAbrir()}>
          <MenuIcon />
        </IconButton>
        {/* Se agrega flexGrow para que el titulo ocupe todo el espacio vertical */}
        <Typography variant="h6" className={classes.title}>
          NavBar
                </Typography>
        <Button variant="text" color="inherit" >
          Login
                </Button>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar;