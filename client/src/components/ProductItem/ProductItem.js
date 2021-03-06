import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {useCartContext} from '../../util/Store';
import './ProductItem.css'


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

    const [, dispatch] = useCartContext();
    
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
            <Button className="custom-button" color="red" aria-label="add to shopping cart" onClick={() => dispatch({ type: "ADD-TO-CART", item: productData })}>
                 Add to Basket
            </Button>
              </CardActions>
            </CardActionArea>
          </Card>
        );
      
  }

export default ProductItem
