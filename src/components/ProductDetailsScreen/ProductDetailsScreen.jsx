import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import Product  from '../Products/Product/Product'

const ProductDetailsScreen = ({ product, onAddToCart }) => {
  const location = useLocation();


  const Section = styled.section`
  display:grid;
    justify-content:center;
   
`
  const Container = styled.div`
  display: flex;
  padding: 11rem 10rem 6rem 15rem;
  overflow: hidden;
  @media (max-width: 900px) {
    flex-direction: column;
    padding: 8rem 0rem 0rem 0rem;
  }
  `
  const Image = styled.div`
  img {
    
    width: 100%;
  `
  const Right = styled.div`
    margin: 1.5rem 5.5rem;
    min-width: 20rem;
  `
  const Thumbnails = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  width: 100%;
  
  img {
    width: 100%;
  }
  `
  const Price = styled.div`
    font-size: 600;
    font-size: 2rem;
    color: DarkBlue;
    margin-bottom: 1.6rem;
  `
  const Title = styled.h1`
    font-size: 3rem;
    margin: 1.3rem 0rem;
  `
  const Select = styled.select`
  font-family: "Poppins", sans-serif;
  width: 7.5rem;
  padding: 0.7rem;
  border: 1px solid grey;
  appearance: none;
  outline: none;
  margin-bottom:2.2rem;
  `
  const AddCart = styled(Link)`
  background: DarkBlue;
  padding: 0.8rem 4rem;
  color: white;
  border-radius: 3rem;
  text-decoration: none;
  margin-left: -.5rem;
  `

  const Description = styled.h3`
  margin-top: 2.3rem;
  `
  const Button = styled.button`
  border:none;
  background-color:white;
  `
  const Left = styled.div`
  max-width: 33rem;
  `

  return (
    <div>
      {location.pathname === '/product/' + product.id && (
      <Section>
        <Container>
          <Left>
            <Image>
              <img src={product.media.source} alt={product.name} />
            </Image>
            <Thumbnails>
              <div class="thumbnail">
                <img src={product.media.source} alt={product.name} />
              </div>
              <div class="thumbnail">
                <img src={product.media.source} alt={product.name} />
              </div>
              <div class="thumbnail">
                <img src={product.media.source} alt={product.name} />
              </div>
              <div class="thumbnail">
                <img src={product.media.source} alt={product.name} />
              </div>
            </Thumbnails>
          </Left>
          <Right>
            <span>Home/Product/{product.name}</span>
            <Title>{product.name}</Title>
            <Price>{product.price.formatted_with_symbol}</Price>
            <form>
              <div>
                <Select>
                  <option value="Select Quantity" selected disabled>
                    Select Quantity
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                </Select>
                
              </div>
            </form>

            <form class="form">
              <Button aria-label="Add to Cart" onClick={() => onAddToCart(product.id, 1)}>
                <AddCart to="/cart" aria-label="Show cart items">Add To Cart</AddCart>
              </Button>
            </form>
            <Description>Product Detail</Description>
            <p dangerouslySetInnerHTML={{ __html: product.description}}>
            </p>
          </Right>
        </Container>
      </Section>
      )}
    </div>
  )
}

export default ProductDetailsScreen