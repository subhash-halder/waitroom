import React from 'react';
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
import {
  createStyles,
  makeStyles,
  Theme,
  withStyles,
} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const styles = (theme: Theme) =>
  createStyles({
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
  });

type State = { loader: boolean };
type Props = {
  classes: any;
};

class Home extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      loader: false,
    };
  }

  render() {
    const { classes } = this.props;
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
          <Backdrop className={classes.backdrop} open={this.state.loader}>
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
}
export default withStyles(styles)(Home);
