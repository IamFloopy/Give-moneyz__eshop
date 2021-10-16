import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../assets/shopping.jpg';

const Wrapper = styled.div`
  height: calc(100vh - 6.5rem);
  position: relative;
  overflow: hidden;
  position: absolute;
  z-index: 999;
  margin: 0 auto;
  left: 0;
  right: 0;
  top: -20%; 
  width: 60%;
  margin-left: 2rem;
  font-size: 2vw;
  @media (max-width: 996px) {
    top: -15%;
  }
  @media (max-width: 567px) {
    top: -13%;
  }
`

const Left = styled.div`
  color: var(--white);
  position: absolute;
  left: 7%;
  top: 40%;
  @media (max-width: 996px) {
    top: 30%;
  }
  @media (max-width: 567px) {
    top: 23%;
  }
`

const Right = styled.div`
  position: absolute;
  right: -7%;
  bottom: -1%;
  @media (max-width: 996px) {
    right: -10%;
  }
  @media (max-width: 567px) {
    right: -18%;
  }
  img {
    max-width: 80rem;
    width: 100%;
    height: 60rem;
    @media (max-width: 1200px) {
      height: 50rem;
    }
    @media (max-width: 996px) {
      height: 35rem;
    }
    @media (max-width: 567px) {
      height: 30rem;
    }
  }
`

const SubTitle = styled.span`
  display: inline-block;
  font-size: 2.5vw;

`
const Title = styled.h1`
  font-size: 5.3vw;
  margin-bottom: 1rem;
  line-height: 1.2;
  
`

const Small = styled.small`
  display: block;
  font-size: 2vw;
  margin-bottom: 1.5rem;
`

const HeroLink = styled(Link)`
  display: inline-block;
  color: black;
  font-weight: 700;
  padding: 0.7rem 1.5rem;
  margin-top: 1rem;
  
  transition: all 300ms ease-out;
  border: 2.5px solid black;
  border-radius: 10px;
  text-decoration: none;
  :hover {
    color: DeepSkyBlue;
    border: 2.5px solid DeepSkyBlue;
  }
`

const Photo = styled.div`
margin-top: -2rem;
margin-left: -4rem;
img {
  width:110%;
  height:auto;
  
`


const Hero = () => {
  return (
    <div>
    <Photo>
    <img src={logo} alt="Give-Moneyz" />
    </Photo>
    <Wrapper>
      <Left>
        <SubTitle>Exclusive Items</SubTitle>
        <Title>Buy my shit. Now! Or else...</Title>
        <Small>Get premium products for the best price</Small>
        <HeroLink to='/'>View Collection</HeroLink>
      </Left>

      <Right>
      </Right>
    </Wrapper>
    </div>
  )
}

export default Hero