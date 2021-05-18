import { React, useState}  from 'react'
import Navbar from '../../components/Navbar';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ProductItem from '../../components/ProductItem/ProductItem';
import {productData} from "../../util/Api";
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';


function Product() {
    const classes = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
        },
        paper: {
          padding: theme.spacing(2),
          textAlign: 'left',
          color: theme.palette.text.secondary,
          margin: 3,
          backgroundColor: '#3d4a5d',
          backgroundImage: 'linearGradient(to right, #121212, #3d4a5d)',
          display: 'flex',
          flexDirection: 'row',
          overflow: 'hidden'
        },
        container: {
          padding: "5%"
        },
        justify: {
          display: 'flex',
          justifyContent: 'spaceBetween'
        }
      }));
    
      const [visibleStart, setVisibleStart] = useState(0);  
      const [visibleEnd, setVisibleEnd] = useState(6);  
      
      const handleBackArrow = () => {
        setVisibleStart((prevValue) => prevValue - 6);
        setVisibleEnd((prevValue) => prevValue - 6);
      }

      const handleForwardArrow = () => {
        setVisibleStart((prevValue) => prevValue + 6);
        setVisibleEnd((prevValue) => prevValue + 6);
      }

    return (
        <div>
            <Navbar />
            <div className={classes.root}>
      <Grid container className={classes.container} spacing={4} direction="column">          
      <Grid container spacing={4}>
        <Grid item xs={0} sm={12}>
          <Paper className={classes.paper}>What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

</Paper>
        </Grid>
      <Grid container spacing={3}>
        <Grid item xs={0} sm={3} md={1}>
          <Paper className={classes.paper}>sm=3</Paper>
        </Grid>
      <Grid container className={classes.container} xs={12} sm={6} md={9} spacing={8}>
             { productData.slice(visibleStart, visibleEnd).map((productData) => 
        <Grid item xs={12} sm={3} md={4}>
          <Paper  className={classes.paper}>
              <ProductItem productData={productData}/>
          </Paper>
        </Grid>
              )}
        <Grid item className={classes.justify} xs={12}>
        <IconButton>
              <ArrowBackIos onClick={handleBackArrow}/>
              <ArrowForwardIos onClick={handleForwardArrow}/>
        </IconButton>      
        </Grid>
        </Grid>
        <Grid item xs={0} sm={3} md={2}>
          <Paper className={classes.paper}>sm=3</Paper>
        </Grid>
        </Grid>
        </Grid>
      </Grid>

        </div>
        </div>
    )
}

export default Product
