
import React from 'react';
import { Typography, Button,} from '@material-ui/core';
import { Link } from 'react-router-dom';

import useStyles from './styles';
import CartItem from './CartItem/CartItem';
import styled from 'styled-components'

const Container = styled.div`
  margin-bottom:12rem;
`
const Grid = styled.div`
  margin:.5rem 1rem;
  padding: .5rem 0rem;
`
const Subtotal = styled.div`
margin-top: -3rem;
  position: absolute;
  right: 5%;

`
const Checkout = styled.div` 
    position: absolute;
    right: 3%;
    margin: 1rem 0rem;
`
const Title = styled.h1`
  margin: 4rem 2.5rem 3rem;
  font-size: 2.4rem;
  font-family: 'Roboto', sans-serif;
`

const Cart = ({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {
    const classes = useStyles();

    const EmptyCart = () => (
        <Typography variant="subtitle1">No items in your shopping cart
            <Link to="/" className={classes.link}>Browse items</Link>
        </Typography>
    );

    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id}>
                        <CartItem item={item} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart} />
                        
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                <Subtotal variant="h4">Subtotal: { cart.subtotal.formatted_with_symbol}</Subtotal>
                <Checkout>
                    <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="" onClick={EmptyCart}>Empty Cart</Button>
                    <Button component={Link} to="/checkout" className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Checkout</Button>
                </Checkout>
            </div>
        </>
    );

    if(!cart.line_items) return 'Loading...';

    return (
        <Container>
            <div className={classes.toolbar} />
            <Title className={classes.title} variant="h3" gutterBottom>Your shopping Cart</Title>
            { !cart.line_items ? <EmptyCart /> : <FilledCart />}
        </Container>
    )
}

export default Cart