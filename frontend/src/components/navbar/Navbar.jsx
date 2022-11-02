import React from 'react'
import {BiSearchAlt2} from 'react-icons/bi'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import styled from 'styled-components'
import {mobile} from '../../responsive'

const Container = styled.div`
  height: 68px;
  color:var(--color-primary);
  background-color:var(--color-bg-variant);
  ${mobile({ height: "68px"})}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "8px 0px" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
  ${mobile({ width: "90px" })}
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
  ${mobile({ marginLeft: "25px" })}
`;
const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "1rem" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;
const Badge = styled.a`
font-size: 1.5rem;
margin-left: 20px;
cursor: pointer;
`
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <SearchContainer>
            <Input placeholder="Buscar" />
            <BiSearchAlt2 />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>BUSINESS TECH.</Logo>
        </Center>
        <Right>
          <MenuItem>Registrate</MenuItem>
          <MenuItem>Ingresa</MenuItem>
          <Badge>
            <AiOutlineShoppingCart />
          </Badge>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar