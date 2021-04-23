import React from 'react';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

export const Footer = () => (
  <Box mt={8}>
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        waitroom
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  </Box>
);
