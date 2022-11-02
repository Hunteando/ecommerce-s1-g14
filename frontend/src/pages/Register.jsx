import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/7238759/pexels-photo-7238759.jpeg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
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
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  border: 1px solid var(--color-primary-variant);
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
  color:var(--color-primary);
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: var(--color-primary);
  color: white;
  cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Crear una cuenta</Title>
        <Form>
          <Input placeholder="Nombre" />
          <Input placeholder="Apellidos" />
          <Input placeholder="Nombre de usuario" />
          <Input placeholder="Correo" />
          <Input placeholder="Contraseña" />
          <Input placeholder="Confirmar contraseña" />
          <Agreement>
          Al crear una cuenta, doy mi consentimiento para el procesamiento de mis datos personales <b>POLITICA DE PRIVACIDAD</b>
          </Agreement>
          <Button>CREAR</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;

