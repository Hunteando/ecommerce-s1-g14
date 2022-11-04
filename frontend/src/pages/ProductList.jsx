import styled from "styled-components";
import Navbar from "../components/navbar/Navbar";
import Products from "../components/products/Products";
import Footer from "../components/footer/Footer";
import { mobile } from "../responsive";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
  color:var(--color-primary)
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color:var(--color-primary-variant)
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Title>Stocks</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filtrar Productos:</FilterText>
          <Select>
            <Option disabled selected>
              Precio
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Tamaño
            </Option>
            <Option>1/4 kg</Option>
            <Option>1 kg</Option>
            <Option>2 kg</Option>
            
          </Select>
        </Filter>
        <Filter>
          <FilterText>Ordenar Productos</FilterText>
          <Select>
            <Option selected>Recientes</Option>
            <Option>Precio (asc)</Option>
            <Option>Precio (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Footer />
    </Container>
  );
};

export default ProductList;