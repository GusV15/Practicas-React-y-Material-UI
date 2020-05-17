import {createMuiTheme} from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import lightGreen from '@material-ui/core/colors/lightGreen';

// Se modifica el color de la propiedad color: primary a purple
const theme = createMuiTheme({
    palette: {
        primary: {
            main: purple[500]
        },
        secondary: {
           main: lightGreen[900] 
        }
    }
});

export default theme;