import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper'; 
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(3, 2),
      width: 400, 
      height: 250,
      display: 'flex',
      flexDirection: 'column',  
      justifyContent: 'center',
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
    },
    containerStyle: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: "url(https://marketplace.canva.com/MADEbjXFeOw/1/thumbnail_large/canva-empty-blue-sky-as-weather-background-MADEbjXFeOw.jpg)",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        margin: '0 auto'
    },
    splashbtn: {
        width: 100,
        marginTop: 20,
        backgroundColor: '#c62828',
        '&:hover': {
            backgroundColor: '#e53935'
        }
    },
    btnCont: {
        display: 'flex',
        justifyContent: 'space-evenly'
    },
  }));            


const Opening = () => {
    const classes = useStyles();
    
    return (
        <div>
            <React.Fragment>
                <CssBaseline />
                <Container className={classes.containerStyle} maxWidth="100%" style = {{height: '100vh', width: '100vw'}} >
                    <Paper className={classes.root}>
                        <Typography variant="h4" component="h3">
                            Welcome to myWeather!
                        </Typography>
                        <div className={classes.btnCont}>
                            <Button className={classes.splashbtn} variant="contained" color="primary">
                                Click to get started!
                            </Button>
                        </div>
                    </Paper>
                </Container>
            </React.Fragment>
        </div>
    );
};

export default Opening;