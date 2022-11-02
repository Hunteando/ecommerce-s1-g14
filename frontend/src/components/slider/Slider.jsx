import React from 'react'
import { useState } from 'react';
import {BsArrowRightShort, BsArrowLeftShort} from 'react-icons/bs'
import {sliderItems} from '../../data'
import styled from "styled-components";
import {mobile} from '../../responsive'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin-top: 18px;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ height: "60vh" })};
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
  font-size: 2rem;
  color: #555;
  &:hover {
    color: #000;
    box-shadow: 0 0 5px #000;
  }
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  ${mobile({ height:"70%", flexDirection: "column" })};
`;
const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
  ${mobile({ height:"70%"})}
`;
const Image = styled.img`
  height: 80%;
  margin-left:40px;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${mobile({ marginTop:"-68px"})}
`;
const Title = styled.h1`
  font-size: 70px;
  color: var(--color-primary-variant);
  ${mobile({ fontSize:"2rem", textAlign: "center" })};
`;
const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  color:var(--color-primary);
  ${mobile({ margin:"20px 0px", fontSize:"1rem",textAlign: "center" })};
`;
const Button = styled.button`
  padding: 10px;
  font-size: 18px;
  background-color: transparent;  
  border: 2px solid var(--color-primary-variant);
  letter-spacing: 3px;
  cursor: pointer;
  &:hover{
    box-shadow: 0 1px 4px 0 #000;
    color:var(--color-primary);
  }
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 1);
    } else {
      setSlideIndex(slideIndex < 1 ? slideIndex + 1 : 0);
    }
  };



  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <BsArrowLeftShort/>
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>SHOP NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <BsArrowRightShort/>
      </Arrow>
    </Container>
  );
};

export default Slider