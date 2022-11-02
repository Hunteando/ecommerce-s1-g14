import styled from "styled-components";
import {mobile} from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/4506938/pexels-photo-4506938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  color:var(--color-primary);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
    border: 1px solid var(--color-primary-variant);
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color:var(--color-primary);
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  margin-top: 10px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  color:var(--color-primary);
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>LOGIN</Title>
        <Form>
          <Input placeholder="Username" />
          <Input placeholder="Password" />
          <Button>INGRESAR</Button>
          <Link>NO RECUERDAS TU CONTRSEÑA?</Link>
          <Link>CREAR UNA CUENTA NUEVA</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;