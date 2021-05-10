import React from 'react';
import logo from '../../assets/images/logo.svg';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import './HomeComp.css';

function HomeComp() {
    return (
        <div className="HomeComp">
            <Container>
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={6}>
                        <Typography className='title' variant='h1'>
                            Click-n-Ship
                        </Typography>
                        <Button className="click-button" href="/Product">Click</Button>
                    </Grid>
                    <Grid className="brand" item xs={12} sm={6}>
                        <img src={logo} width="120px" className="App-logo" alt="logo"/>
                        <img src="../../assets/images/HomeImage.jpg" className="aspect-ratio" alt="home screen" />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default HomeComp;
