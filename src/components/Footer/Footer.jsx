import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../assets/Give-Moneyz.png';

const Wrapper = styled.div`
  margin: 3rem -1rem -1rem;
  grid-area: footer;
  padding: 4rem 5rem 4rem;
  line-height: 3rem;
  background-color: #F9F9F9;
  .payment-methods {
    margin-top: 2rem;
  }
`

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  color: var(--white);
  @media (max-width: 996px) {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 2rem;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const Col = styled.div`
  span {
    margin-right: 1rem;
  }
  div {
    color: grey;
    font-size: 1rem;
    margin-Left: -.7rem;
  }
  hr {
    background-color: black;
    width: 6rem;
    position: absolute;
    margin-top: -.4rem;
  }
`

const LinkWrapper = styled(Link)`
  text-decoration: none;
  display: block;
  color: grey;
  font-size: 1rem;
  transition: 0.6s;
  margin-bottom: -.6rem;
  :hover {
    color: DeepSkyBlue;
  }
`

const Heading = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-weight: 550;
  margin-bottom: .5rem;
  color: black;
`

const Logo = styled.div`
  margin-top: 1.3rem;
  margin-Left: -1rem
`

const Footer = () => {
  return (
    <Wrapper>
      <div className='container'>
        <Row>
         
          <Col>
            <Heading>INFORMATION</Heading>
            <hr/>
            <LinkWrapper to='#'>About Us</LinkWrapper>
            <LinkWrapper to='#'>Privacy Policy</LinkWrapper>
            <LinkWrapper to='#'>Terms & Conditions</LinkWrapper>
            

          </Col>
          <Col>
            <Heading>Follow us</Heading>
            <hr/>
            <LinkWrapper to='#'>Instagram</LinkWrapper>
            <LinkWrapper to='#'>Facebook</LinkWrapper>
            <LinkWrapper to='#'>Twitter</LinkWrapper>
            <LinkWrapper to='#'>YouTube</LinkWrapper>

          </Col>
          <Col>
            <Heading>Contuct us</Heading>
            <hr/>
            <LinkWrapper to='#'>givemoneyz@gmail.com</LinkWrapper>
            <LinkWrapper to='#'>123-456-789</LinkWrapper>

          </Col>
          <Col>
          <Logo>
          <img src={logo} alt="Give-Moneyz" height="37rem" />
            <div>
              <span>
                <i className='fas fa-map-marker-alt'></i>
              </span>
              Give me your god damn moneyz.
            </div>

            <div className='payment-methods'>
              <img src='/images/payment.png' alt='' />
            </div>
            </Logo>
          </Col>
        </Row>
      </div>
      
    </Wrapper>
  )
}

export default Footer