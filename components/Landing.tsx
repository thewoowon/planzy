"use client";
import styled from "@emotion/styled";

const Landing = () => {
  return (
    <Container>
      <Logo>Plenzy</Logo>
    </Container>
  );
};

export default Landing;

const Container = styled.div`
rgba(24, 164, 2, 0.80); 
height: 100vh;
width: 100vw;
position: absolute;
top: 0;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
z-index: 1000;
background-image: url("/planzy-bg.png");
background-size: cover;
`;

const Logo = styled.div`
  font-size: 3rem;
  font-weight: 800;
  color: white;
  margin-bottom: 1rem;
  animation: transform 1s ease-in-out infinite;

  @keyframes transform {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`;
