import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '../components/Button';
import Typography from '../components/Typography';
import LandingHeroLayout from './LandingHeroLayout';
import { Link } from "react-router-dom";

const backgroundImage =
  '/landingHero.jpg';

const styles = (theme) => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#d3bfa7', // Average color of the background image.
    backgroundPosition: 'center',
    filter: `blur(2px)`
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
});

function LandingHero(props) {
  const { classes } = props;

  return (
    <LandingHeroLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <img style={{ display: 'none' }} src={backgroundImage} alt="increase priority" />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Upgrade your Sundays
      </Typography>
      <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
        Enjoy secret offers up to -70% off the best luxury hotels every Sunday.
      </Typography>
      <Link to={"/signup"}>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        className={classes.button}
        component="a"
      >
        Register
      </Button>
      </Link>
      <Typography variant="body2" color="inherit" className={classes.more}>
        Discover the experience
      </Typography>
    </LandingHeroLayout>
  );
}

LandingHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LandingHero);