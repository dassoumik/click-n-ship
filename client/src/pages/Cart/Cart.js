import React from 'react';
import Navbar from '../../components/Navbar';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '../../components/ListItem/ListItem';
import {Button} from '@material-ui/core';
import {Col, Container, Row} from 'react-bootstrap';
import {useCartContext} from '../../util/Store';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';

function Cart() {
    const [state, dispatch] = useCartContext();
    const useStyles = makeStyles((theme) => ({
        root: {
        //   width: '40rem',
          paddingRight: "2rem",
        },
        heading: {
          fontSize: theme.typography.pxToRem(15),
          fontWeight: theme.typography.fontWeightRegular,
        },
      }));
    const classes = useStyles();  
    // console.log(state.product);
    return (
        <div>
            <Navbar/>
            <Row className={classes.root}>
                <Col className="sm-col-8 md-col-8">
                {console.log(state.cart)}
            {state.cart.map(product => 
                 {return (<ListItem product={product}/>);})}
            </Col>

            <Col className="sm-col-3 mt-5 pr-2">

            <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}><strong>Sub Total: </strong><small>$</small>{state.cartTotal}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Shipping and Taxes may be added extra.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
<Button variant="click-button" style={{backgroundColor: "#80ffdb", marginTop: "2rem", alignSelf: "right"}} href="/shipping">
    Checkout
</Button>
    </Col>
            </Row>

        </div>
    )
}

export default Cart
