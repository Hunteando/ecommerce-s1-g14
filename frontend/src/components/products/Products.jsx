import styled from "styled-components";
import { popularProducts } from "../../data";
import Product from "./Product";
import {mobile} from "../../responsive";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap; 
    justify-content: space-between;
    background-color: var(--color-bg);
`;
const ContainerTitle = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin: 20px;
`;

const Title = styled.h1`
    color:var(--color-primary-variant);
    letter-spacing: 4px;
    font-size: 50px;
    font-weight: bold;
    background-color: transparent;
    ${mobile({fontSize: "2.5rem", textAlign: "center"})}
`;

const Products = () => {
  return (
    <Container>
    <ContainerTitle>
      <Title>PRODUCTS</Title>
    </ContainerTitle>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;