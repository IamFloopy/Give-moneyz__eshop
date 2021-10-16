import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './styles';
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
align-items: center;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 3rem;
  padding: 0 1.6rem;
  margin-bottom: 3.5rem;
`
const ImgContainer = styled.div`
  position: relative;
  cursor: pointer;
  img {
    object-fit: cover;
    height: 21rem;
    width: 21rem;
    transition: transform .4s;
    :hover {
        transform: scale(1.08);
        height: 21rem;
      }
  }

`
const ProductItem = styled.div`
  overflow: hidden;
`
const Bottom = styled.div`
  margin-top: 1rem;
`
const ToTheRight = styled.div`
    display: flex;
    font-size: 25px;
    color: grey;
    margin-top: .8rem;
`
const ButtonRight = styled.div`
    margin-top: -.75rem;
    margin-left: 12.2rem;
`
const ProductName = styled(Link)`
    color: black;
    text-decoration: none;
    font-size: 25px;
    transition: all 0.3s ease;
    :hover {
        color: DeepSkyBlue;
        cursor: pointer;
      }
`

const PutInCenter = styled.div`
    display: flex;
    justify-content: center;
`

const Product = ({ product, onAddToCart }) => {
    const classes = useStyles();

    return (
        <PutInCenter>
        <Wrapper>
            <ProductItem>
            <Link to={'/product/' + product.id}>
            <ImgContainer>
            <img src={product.media.source} alt={product.name} />
            </ImgContainer>
            </Link>
            <Bottom>
                <div className={classes.content}>
                    <ProductName to={'/product/' + product.id}>
                        {product.name}
                    </ProductName>
                    <ToTheRight>
                        {product.price.formatted_with_symbol}
                        <ButtonRight>
                        <IconButton aria-label="Add to Cart" onClick={() => onAddToCart(product.id, 1)}>
                            <AddShoppingCart />
                        </IconButton>
                        </ButtonRight>
                    </ToTheRight>
                </div>
            </Bottom>
    
            </ProductItem>
        </Wrapper>
        </PutInCenter>
    )
}

export default Product
