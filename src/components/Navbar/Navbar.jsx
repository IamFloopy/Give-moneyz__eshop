import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';

import logo from '../../assets/Give-Moneyz.png';
import useStyles from './styles';
import styled from 'styled-components'

const Navbar = ({ totalItems }) => {
    const classes = useStyles();
    const location = useLocation();

const LinkWrapper = styled(Link)`
    text-decoration: none;
    display: block;
    color: grey;
    font-size: 1.3rem;
    transition: 0.6s;
    margin: 0rem 1rem ;
    font-family: 'Roboto', sans-serif;
    :hover {
        color: DeepSkyBlue;
    }
    @media (max-width: 860px) {
        font-size: 0rem;
      }
`

const StickRight = styled.div`
    display: flex;
    position: absolute;
    right: 80px;
    }
`
    

    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="Give-Moneyz" height="28px" className={classes.image} />
                    </Typography>
                    <StickRight>
                        <LinkWrapper to="/">Home</LinkWrapper>
                        <LinkWrapper to='#'>Products</LinkWrapper>
                        <LinkWrapper to='#'>About</LinkWrapper>
                        <LinkWrapper to='#'>Contact</LinkWrapper>
                        <LinkWrapper to='#'>Account</LinkWrapper>
                    </StickRight>
                    {/*<div className={classes.grow} />
                    {location.pathname === '/' && (
                    <div className={classes.button}>*/}
                        <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                            <Badge badgeContent={totalItems} color="primary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    {/*</div> )}*/}
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
