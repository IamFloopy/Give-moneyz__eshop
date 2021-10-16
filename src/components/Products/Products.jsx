import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';
import styled from 'styled-components'
import InitialPic from './InitialPic';


const Products = ({ products, onAddToCart }) => {
    const classes = useStyles();
    

const Title = styled.div`
    text-align: center;
    margin: 6.5rem 0rem 1rem;
    font-size: 38px;
    font-family: 'Indie Flower', cursive;
  `

const Description = styled.div`
    text-align: center;
    margin: 0rem 0rem 6rem;
    font-size: 24px;
    color: grey;
`

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <InitialPic />
            <Title>Products</Title>
            <Description>Choose from our selection of products</Description>
            <Grid container justify='center' spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} onAddToCart={onAddToCart} />
                    </Grid>
                ))}
            </Grid>
            
        </main>
    );
};

export default Products;