import styled from "styled-components";
import { categories } from "../../data";
import { mobile } from "../../responsive";
import CategoryItem from "./CategoryItem";

const ContainerCategory = styled.div`
background-color: var(--color-white);
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  gap: 40px;
  ${mobile({ padding: "10px", flexDirection:"column",width: "360px", gap: "20px" })}
`;

const Categories = () => {
  return (
    <ContainerCategory>
      <Container>
        {categories.map((item) => (
          <CategoryItem item={item} key={item.id} />
        ))}
      </Container>
    </ContainerCategory>
  );
};

export default Categories