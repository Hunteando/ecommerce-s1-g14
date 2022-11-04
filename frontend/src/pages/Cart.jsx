import {GrFormAdd} from "react-icons/gr";
import {MdRemove} from "react-icons/md";
import styled from "styled-components";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import { mobile } from "../responsive";
import cpu1 from '../assets/cpu2.png'
import monitor1 from '../assets/monitor3.png'

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
  color: var(--color-primary)
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })};
  color: var(--color-primary);
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: var(--color-primary-variant)
`;

const ProductName = styled.span`
color: var(--color-primary)`;

const ProductId = styled.span``;




const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
  color: var(--color-primary)
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Title>Tu carrito</Title>
        <Top>
          <TopButton>Continua Comprando</TopButton>
          <TopTexts>
            <TopText>Carrito de compras(2)</TopText>
            <TopText>Tu lista de deseos (0)</TopText>
          </TopTexts>
          <TopButton type="filled">Comprar</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src={cpu1} />
                <Details>
                  <ProductName>
                    <b>Producto:</b> CPU Gamer
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 93813718293
                  </ProductId>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <GrFormAdd />
                  <ProductAmount>2</ProductAmount>
                  <MdRemove />
                </ProductAmountContainer>
                <ProductPrice>S/ 80</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src={monitor1} />
                <Details>
                  <ProductName>
                    <b>Product:</b> Mac Desktop
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 93813718293
                  </ProductId>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <GrFormAdd />
                  <ProductAmount>1</ProductAmount>
                  <MdRemove />
                </ProductAmountContainer>
                <ProductPrice>S/ 90</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>Resumen de orden</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>S/ 250</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Delivery</SummaryItemText>
              <SummaryItemPrice>S/ 10</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>S/ -10</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>S/ 250</SummaryItemPrice>
            </SummaryItem>
            <Button>PAGAR AHORA</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;