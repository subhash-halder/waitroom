import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Alert from '@material-ui/lab/Alert';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import URI from '../../uri';

const useStyles = makeStyles((theme) => ({
  header: {
    flexGrow: 1,
    textAlign: 'center',
  },
  title: {
    flexGrow: 1,
    padding: '20px 0px',
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(1, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const [loader, _] = React.useState(false);

  return (
    <div>
      <div className={classes.header}>
        <AppBar position="static">
          <Typography variant="h3" className={classes.title}>
            waitroom
          </Typography>
        </AppBar>
      </div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Backdrop className={classes.backdrop} open={loader}>
          <CircularProgress color="inherit" />
        </Backdrop>
        <Box mt={8}>
          <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
              waitroom
            </Link>{' '}
            {new Date().getFullYear()}.
          </Typography>
        </Box>
      </Container>
    </div>
  );
}
