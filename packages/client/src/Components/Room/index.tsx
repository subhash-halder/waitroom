import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createStyles, Theme, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Footer } from '../Footer';

type State = {};
type Props = RouteComponentProps<any> & {
  classes: any;
};

class Home extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    const { match, location } = this.props;
    const { roomId } = match.params;
    const usertype = new URLSearchParams(location.search).get('usertype');
    return (
      <div>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Footer />
        </Container>
      </div>
    );
  }
}

const styles = (theme: Theme) => createStyles({});

export default withRouter(withStyles(styles)(Home));
