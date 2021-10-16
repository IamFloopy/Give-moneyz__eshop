import React from 'react'
import { Typography, Button, CardContent, CardMedia } from '@material-ui/core';

import useStyles from './styles';
import styled from 'styled-components'

const Card = styled.div`
  display:flex;
`

const Image = styled.div`
img {
    border-radius: 10%
}
`
const Price = styled.div`
    margin: 1.9rem 0rem 0rem 0rem;
  position:absolute;
  right: 5%;
`
const Name = styled.p`
    font-size:1.3rem;
  
`
const CardActions = styled.div`
  display:flex;
  height: 2.6rem;
  margin: 2.2rem 0rem 0rem 0rem;
  position: absolute;
  right: 20%;
`

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
    const classes = useStyles();

    console.log(item);
    return (
        <Card className="cart-item">
            <Image>
                <img src={item.media.source} height='100rem'  alt={item.name} />
            </Image>
            <CardContent className={classes.cardContent}>
                <Name variant="h4">{item.name}</Name>
                <Price variant="h5">{item.line_total.formatted_with_symbol}</Price>
            </CardContent>
            <CardActions>
                <div className={classes.buttons}>
                    <Button type="button" size="small" onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}>-</Button>
                    <Typography>&nbsp;{item.quantity}&nbsp;</Typography>
                    <Button type="button" size="small" onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}>+</Button>
                </div>
                <Button variant="contained" type="button" color="" onClick={() => onRemoveFromCart(item.id)}>Remove</Button>
            </CardActions>
        </Card>
  );
};

export default CartItem
