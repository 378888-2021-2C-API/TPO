import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '../../components/Button';
import Typography from '../../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';

const backgroundImage =
  '/static/images/backgroundPedriatria.jpg';

const styles = (theme) => ({
  background: {
    backgroundImage: `${backgroundImage}`,
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center',
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

function ProductHero(props) {
  const { classes } = props;

  return (
    <ProductHeroLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <img style={{ display: 'none' }} src={backgroundImage} alt="increase priority" />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Pagina en contruccion
      </Typography>
      <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
        Sistema que permite la gestion de controles pediátricos de tus hijos.
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        className={classes.button}
        component="a"
        href="/sign-up/"
      >
        Registrase
      </Button>
      <Typography variant="body2" color="inherit" className={classes.more}>
         Descubri todo lo que podes hacer
      </Typography>
    </ProductHeroLayout>
  );
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);
