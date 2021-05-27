import { React, useState, useEffect}  from 'react'
import Navbar from '../../components/Navbar';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ProductItem from '../../components/ProductItem/ProductItem';
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import { API } from '../../util/Connections';
import "../../assets/images/logo_large.jpg";
import LinearProgress from '@material-ui/core/LinearProgress';
import ReactPlayer from 'react-player';
import '../../assets/images/Click-n-Smile-Challenge.mp4';


function Product() {
    const [products, setProducts] = useState();
    const [productFetched, setProductData] = useState();
    const [visibleStart, setVisibleStart] = useState(0);  
    const [visibleEnd, setVisibleEnd] = useState(6);  

    useEffect(() => {
      loadProducts();
      setProductData(products?.slice(0, 6));  
    },[]);

    function loadProducts() {
      API.getProduct()
           .then(res => {
             setProducts(res.data);
             setProductData(products?.slice(0, 6))});  
      }

    const classes = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
          padding: theme.spacing(2),
          zIndex: -1
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
          padding: "5%",
          paddingTop: '1rem'
        },
        justify: {
          display: 'flex',
          justifyContent: 'spaceBetween'
        },
        spinner: {
          display: 'inlineFlex',
          '& > * + *': {
            marginLeft: theme.spacing(4),
          },
         
        },
      }));
      
      const handleBackArrow = () => {
        if ( visibleStart - 6 >=0) {
        setVisibleStart((prevValue) => prevValue - 6);
        setVisibleEnd((prevValue) => prevValue - 6);
        } else {
          setVisibleStart(products?.length - 7);
          setVisibleEnd(products?.length - 1);
        }
        
        setProductData(products?.slice(visibleStart, visibleEnd))
      }

      const handleForwardArrow = () => {
        if (products?.length > visibleEnd + 7) {
        setVisibleStart((prevValue) => prevValue + 6);
        setVisibleEnd((prevValue) => prevValue + 6);
        } else {
          setVisibleStart(0);
          setVisibleEnd(6);
        }
        setProductData(products?.slice(visibleStart, visibleEnd)) 
      }

    return (
        <div>
            <Navbar />
          {productFetched?.length ?  
            (<div className={classes.root}>
      <Grid container className={classes.container} spacing={4} direction="column">          
      <Grid container spacing={4}>
        <Grid item xs={0} sm={12}>
          <Paper className={classes.paper}>
              <ReactPlayer url="https://youtu.be/pS1D_1l4SL8"
               width="100%"
               height="200px"
               controls
               allow='autoplay; encrypted-media'
               araia-label='Now Added in Click-n-Play'
               />
          </Paper>
        </Grid>
      <Grid container spacing={3}>
        <Grid item xs={0} sm={3} md={1}>
          <Paper className={classes.paper}></Paper>
        </Grid>
      <Grid container className={classes.container} style={{marginTop: '1px'}} xs={12} sm={6} md={9} spacing={8}>
             { productFetched?.map((productData) => 
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
        <Grid item xs={0} sm={3} md={2} style={{marginLeft: '1rem', marginTop: '3rem'}}>
          <Paper className={classes.paper}>
            <iframe  title="Click-n-Smile" style={{border:"none", allowautoplay: true,  marginBottom: 0, paddingBottom: 0, loop: true}} src="https://clipchamp.com/watch/xGAwXYumnUm/embed" width="100%" height="440"></iframe>
          </Paper>
        </Grid>
        </Grid>
        </Grid>
      </Grid>

        </div>):

        (<div className="mt-5 col-sm-12 col-md-6 mx-auto">
          <span>If the screen do not refresh in 30 secs click the button below</span> 
          <div className="flex">
          <img src="../../assets/images/logo_large.jpg" alt="logo_large"/>
          <div className={classes.spinner}>
           <LinearProgress  style={{margin: "0 5.2rem 0 5.2rem"}}/>
          </div>
          <IconButton  onClick={handleForwardArrow}>
              <ArrowForwardIos color="primary" onClick={handleForwardArrow}/>
              <ArrowForwardIos  color="primary" onClick={handleForwardArrow}/>
              <ArrowForwardIos color="primary" onClick={handleForwardArrow}/>
          </IconButton>
          </div>
        </div>)}
        </div> 

    )
}

export default Product
