import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import AddShoppingCartIcon from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import {useCountContext} from '../../util/Store';

import './ProductItem.css'

// import tileData from './tileData';

function ProductItem({productData}) {
    const useStyles = makeStyles({
        root: {
          minWidth: 200,
          maxHeight: 500,
          boxShadow: '0 0 4px 4px #7e8c99',
          backgroundColor: '#3d4a5d',
          backgroundImage: 'linearGradient(to right, #121212, #3d4a5d)',
          color: 'white',
          padding: 20
        },
      });

    const [state, dispatch] = useCountContext();
    
    //   function ImgMediaCard({productData})  {
        const classes = useStyles();
      
        return (
          <Card className={classes.root} raised="true" >
            <CardActionArea className={"custom-card"}>
              <CardContent className="content">
                <Typography className='title' gutterBottom variant="h6" component="p">
                  {productData.title}
                </Typography>
                <Typography className='basket-item-price' variant="body2" color="white" component="p">
                  Price ${productData.price}
                </Typography>
              </CardContent>
              <CardMedia
                component="img"
                alt="product"
                height="260"
                image={productData.image}
                title={productData.title}
              />
              <CardActions className="custom-card actions-content">
            <Button className="custom-button" color="red" aria-label="add to shopping cart">
                <AddShoppingCartIcon onClick={() => dispatch({ type: "ADD-TO-CART" })}/>
            </Button>
              </CardActions>
            </CardActionArea>
            {/* <CardActions> */}
              {/* <Button size="small" color="primary">
                Learn More
              </Button> */}
            {/* </CardActions> */}
          </Card>
        );
      

    // const useStyles = makeStyles((theme) => ({
    //     root: {
    //       display: 'flex',
    //       flexWrap: 'wrap',
    //       justifyContent: 'space-around',
    //       overflow: 'hidden',
    //       backgroundColor: theme.palette.background.paper,
    //     },
    //     gridList: {
    //       flexWrap: 'nowrap',
    //       // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    //       transform: 'translateZ(0)',
    //     },
    //     title: {
    //       color: theme.palette.primary.light,
    //     },
    //     titleBar: {
    //       background:
    //         'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    //     },
    //   }));

    // // function SingleLineGridList() {
    //     const classes = useStyles();
      
    // return (
    //     <div className={classes.root}>
    //     <GridList className={classes.gridList} cols={2.5}>
    //       {productData.map((tile) => (
    //         <GridListTile key={tile.id}>
    //           <img src={tile.image} alt={tile.title} />
    //           <GridListTileBar
    //             title={tile.title}
    //             classes={{
    //               root: classes.titleBar,
    //               title: classes.title,
    //             }}
    //             actionIcon={
    //               <IconButton aria-label={`star ${tile.title}`}>
    //                 <StarBorderIcon className={classes.title} />
    //               </IconButton>
    //             }
    //           />
    //         </GridListTile>
    //       ))}
    //     </GridList>
    //   </div>
    // )
    }
// }

export default ProductItem
