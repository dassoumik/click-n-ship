import React from 'react';
import Navbar from '../../components/Navbar';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '../../components/ListItem/ListItem';
import {Button, Card, CardContent, CardActions} from '@material-ui/core';
import {Col, Container, Row} from 'react-bootstrap';
import {useCartContext} from '../../util/Store';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function Cart() {
    const [state, dispatch] = useCartContext();
    const useStyles = makeStyles((theme) => ({
        root: {
          paddingRight: "2rem",
        },
        heading: {
          fontSize: theme.typography.pxToRem(15),
          fontWeight: theme.typography.fontWeightRegular,
        },
      }));
    const classes = useStyles();  
    return (
        <div>
            <Navbar/>
            <Row className={classes.root}>
                <Col className="sm-col-8 md-col-8">
                {console.log(state.cart)}
            {state.cart.map((product, index) => 
                 {return (<ListItem product={product} index={index} key={index}/>);})}
            </Col>

            <Col className="sm-col-3 mt-5 pr-2">

            <div className={classes.root}>

      <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5"  component="h2" className={classes.title} color="textSecondary" gutterBottom>
          Cart Checkout Details
        </Typography>
        <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {state.cart.map((product) => (
            <TableRow key={product.title}>
              <TableCell component="th" scope="row">
                {product.title}
              </TableCell>
              <TableCell align="right">{product.price}</TableCell>
            </TableRow>
          ))}
          <TableRow >
              <TableCell component="th" scope="row">
                Tax
              </TableCell>
              <TableCell align="right">{(state.cartTotal*.07).toFixed(2)}</TableCell>
          </TableRow>
          <TableRow >
              <TableCell component="th" scope="row">
                Shipping
              </TableCell>
              <TableCell align="right">10.00</TableCell>
          </TableRow>
          <TableRow >
              <TableCell component="th" scope="row">
                Total
              </TableCell>
              <TableCell align="right"><small>$</small>{(state.cartTotal + state.cartTotal*.07 + 10).toFixed(2)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
        </CardContent>
    </Card>
      </div>
<Button variant="click-button" style={{backgroundColor: "#80ffdb", marginTop: "2rem", alignSelf: "right"}} href="/shipping">
    Ship
</Button>
    </Col>
            </Row>

        </div>
    )
}

export default Cart
