import React from 'react';
import logo from '../../assets/images/logo.svg';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import './HomeComp.css';
import LoginComp from '../Login/LoginComp';
import AdminLoginComp from '../AdminLogin/AdminLoginComp';


function HomeComp({ type }) {

    return (
        <div className="HomeComp">
            <Container style={{ margin: "0" }}>
                <Grid container spacing={4} style={{ margin: "0" }}>
                    <Grid item xs={12} sm={6}>
                        <Typography className='title' variant='h1'>
                            Click-n-Ship
                        </Typography>
                        <Button className="click-button" href="/Product">Click</Button>
                    </Grid>
                    {type === "home" ? (
                        <Grid className="brand" item xs={12} sm={6}>
                            <img src={logo} width="120px" className="App-logo" alt="logo" />
                            <img src="../../assets/images/HomeImage.jpg" className="aspect-ratio" alt="home screen" />
                        </Grid>) : type === "login" ? (
                            <Grid className="brand" item xs={12} sm={6}>
                                <LoginComp className="aspect-ratio" />
                            </Grid>
                        ) : (
                        <Grid className="brand" item xs={12} sm={6}>
                            <AdminLoginComp className="aspect-ratio" />
                        </Grid>
                    )}
                </Grid>
            </Container>
        </div>
    )
}

export default HomeComp;
