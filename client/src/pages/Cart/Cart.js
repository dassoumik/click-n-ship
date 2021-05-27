import React  from 'react';
import {useHistory} from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '../../components/ListItem/ListItem';
import {Button, Card, CardContent} from '@material-ui/core';
import {Col, Row} from 'react-bootstrap';
import {useCartContext} from '../../util/Store';
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
    const history = useHistory();
    function loadShipping () {
      history.push("/shipping")

    }
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
            {state.cart.map((product, index) => 
                 {return (<ListItem product={product} index={index} key={index}/>);})}
            </Col>

            <Col className="xs-col-3 mt-5 pr-2">

            <div className={classes.root} style={{width: "30rem"}}>

      <Card variant="outlined" style={{ padding: '0 1rem 0 1rem'}}>
      <CardContent>
        <Typography  className={classes.title} color="textSecondary" gutterBottom>
          Cart Checkout Details
        </Typography>
        <TableContainer className="mx-auto" style={{margin: '1rem 2rem 1rem 2rem', padding: '0 1rem 0 1rem'}} component={Paper}>
      <Table className={classes.table}  aria-label="simple table">
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
              <TableCell align="right">{(state.cartSubTotal*.07).toFixed(2)}</TableCell>
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
              <TableCell align="right"><small>$</small>{(state.cartSubTotal + state.cartSubTotal*.07 + 10).toFixed(2)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
        </CardContent>
    </Card>
      <div className="text-center" style={{display: 'flex', flexDirection: 'column', paddingLeft: '10rem', paddingRight: '10rem'}}>
  <Button variant="click-button" style={{backgroundColor: "#80ffdb", marginTop: "2rem",}} onClick={loadShipping}>
    Ship
  </Button>
      </div>
      </div>
    </Col>
  </Row>
</div>
    )
}

export default Cart
