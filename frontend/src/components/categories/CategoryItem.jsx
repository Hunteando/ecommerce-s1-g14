import styled from "styled-components";
import { mobile } from "../../responsive";
import { Link } from "react-router-dom";

const Container = styled.a`
  flex: 1;
  margin: 3px;
  height: 50vh;
  position: relative;
  cursor: pointer;
  border-radius: 40px;
  border:none;
  color:var(--color-bg);
  background-color: var(--color-light);
    &:hover{
      box-shadow: 0  0 8px  rgba(0,0,0,0.2);
    }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 40px;
  border: 2px solid var(--color-light);
  ${mobile({ height: "30vh" })}
  border:none;
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.a`
    color:var(--color-primary-variant);
    letter-spacing: 3px;
    font-size: 70px;
    font-weight: bold;
    background-color: transparent;
    ${mobile({fontSize: "4rem", textAlign: "center"})}
`;

const CategoryItem = ({ item }) => {
    return (
    <Container>
    <Link to={`/products/${item.cat}`}>
        <Image src={item.img} />
        <Info>
            <Title>{item.title}</Title>
        </Info>
    </Link>
    </Container>
    );
};

export default CategoryItem;