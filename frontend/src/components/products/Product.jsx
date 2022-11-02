import {BiSearchAlt2} from 'react-icons/bi'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {MdFavorite} from 'react-icons/md'
import styled from "styled-components";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 10px;
  min-width: 230px;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color:var(--color-white);
  position: relative;
  &:hover ${Info}{
    opacity: 1;
  }
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 50px;
  height: 50px;
  font-size: 1.2rem;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  color:black;
  &:hover {
    background-color: var(--color-bg);
    transform: scale(1.1);
  }
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Icon>
          <AiOutlineShoppingCart />
        </Icon>
        <Icon>
          <BiSearchAlt2 />
        </Icon>
        <Icon>
          <MdFavorite />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
