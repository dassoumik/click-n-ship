import React from 'react'
import Navbar from '../../components/Navbar';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ProductItem from '../../components/ProductItem/ProductItem'


function Product() {
    const classes = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
        },
        paper: {
          padding: theme.spacing(2),
          textAlign: 'center',
          color: theme.palette.text.secondary,
        },
      }));

    return (
        <div>
            <Navbar />
            <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={0} sm={12}>
          <Paper className={classes.paper}>sm=12</Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={0} sm={3}>
          <Paper className={classes.paper}>sm=3</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
              sm=6
              <ProductItem/>
          </Paper>
        </Grid>
        <Grid item xs={0} sm={3}>
          <Paper className={classes.paper}>sm=3</Paper>
        </Grid>
      </Grid>
        </div>
        </div>
    )
}

export default Product
