import React from 'react';
import { v4 as uuid } from 'uuid';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import { createStyles, Theme, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Footer } from '../Footer';

type State = { loader: boolean };
type Props = RouteComponentProps<any> & {
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
    const { classes, history } = this.props;
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
          <div className={classes.buttonGroup}>
            <Button
              variant="contained"
              onClick={() => {
                history.push(`/${uuid()}?usertype=host`);
              }}
              color="primary"
              disableElevation
            >
              Create new Room
            </Button>
          </div>
          <Footer />
        </Container>
      </div>
    );
  }
}

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
    buttonGroup: {
      width: '100%', // Fix IE 11 issue.
      textAlign: 'center',
      marginTop: theme.spacing(10),
    },
    submit: {
      margin: theme.spacing(1, 0, 2),
    },
  });

export default withRouter(withStyles(styles)(Home));
