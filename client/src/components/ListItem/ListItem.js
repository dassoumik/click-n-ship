import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import DeletetIcon from '@material-ui/icons/Delete';
import { CardActionArea, CardActions, Container } from '@material-ui/core';
import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';
import {Col} from 'react-bootstrap';
import { useCartContext } from '../../util/Store';


function ListItem({product, index}) {
const [,dispatch] = useCartContext();


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    margin: '2rem',
    marginLeft: 0,
  },
  details: {
    display: 'flex',
    flexDirection: 'row',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
    // width: 30,
  },
  controls: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'right',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    boxShadow: '4px',
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  container: {
      width: '30rem',
      marginLeft: 0,
      display: 'flex',
      flexDirection: 'column'
  }
}));

// export default function MediaControlCard() {
  const classes = useStyles();
  const theme = useTheme();

  const deleteProduct = () => {
      console.log("in delete function");
      dispatch({type: "DELETE-FROM-CART", item: index});

  }

  return (
      <>
      <Container className={classes.container}>

    <Card className={classes.root} raised='true'>
      <div className={classes.details}>
          <Col className="xs-col-2">
          <CardMedia
          className={classes.cover}
          component="img"
          image={product.image}
          title={product.title}
          /> 
          </Col>
        <Col className="xs-col-6">
        <CardContent className={classes.content}>
          <Typography >
            {product.title}
          </Typography>
        </CardContent>
        </Col>
        <Col className="xs-col-2">

        <CardContent className={classes.content}>
          <Typography >
            Price: <small>$</small><strong>{product.price}</strong>
          </Typography>
        </CardContent>
        </Col>
        
        {/* <div className={classes.controls}> */}
        <Col className="xs-col-2">
         <CardActions className={classes.content}>
        <IconButton aria-label="delete" onClick={deleteProduct} >
           <DeleteSharpIcon />
        </IconButton>
         </CardActions> 
        </Col>
        {/* </div> */}
        
      </div>
     
    </Card>
          </Container>
          
         </> 
  );
}

export default ListItem
