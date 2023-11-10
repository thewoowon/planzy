import styled from "@emotion/styled";

const GlobalLoading = () => {
  return (
    <LoadingContainer>
      <main>
        {new Array(12).fill(0).map((_, i) => {
          const style = { "--i": i + 1 } as React.CSSProperties;
          return <div key={i} className="cube" style={style}></div>;
        })}
      </main>
    </LoadingContainer>
  );
};

export default GlobalLoading;

const LoadingContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  z-index: 9999;
  padding-bottom: 300px;
  background-color: #fff;
  scale: 0.5;

  main {
    transform-style: preserve-3d;
    transform: rotateX(45deg) rotateZ(45deg);
  }

  .cube {
    --size: 1.5rem;
    --offset: calc(var(--size) * -1);
    --duration: 3600ms;
    --delay: calc(var(--i) * -0.0335s);
    --ease: cubic-bezier(0.84, 0, 0.2, 1);

    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0.5rem;
    width: var(--size);
    height: var(--size);
    background-color: var(--bg-color);
    box-shadow: inset rgba(black, 0.15) -0.5rem 0.5rem 1rem;
    transform-style: preserve-3d;
    transform-origin: 50% 100% var(--offset);
    transition-property: transform, background-color;
    transition-timing-function: ease-out;
    animation: animate var(--duration) var(--delay) var(--ease) alternate
        infinite,
      color calc(var(--duration) * 2) var(--delay) var(--ease) infinite;
  }

  .cube:nth-of-type(odd) {
    --bg-color: hsl(136, 94%, 50%);
  }
  .cube:nth-of-type(even) {
    --bg-color: hsl(150, 95%, 40%);
  }
  .cube:nth-of-type(3n) {
    --bg-color: hsl(154, 100%, 24%);
  }

  .cube::before,
  .cube::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: inherit;
    box-shadow: inherit;
    transform-origin: 100% 100%;
  }

  .cube::before {
    transform: translateZ(var(--offset)) rotateY(90deg);
    filter: brightness(120%);
  }

  .cube::after {
    transform: translateZ(var(--offset)) rotateX(-90deg);
    filter: brightness(80%);
  }

  @keyframes animate {
    0% {
      transform: scaleX(2);
    }
    20% {
      transform: scaleX(0.3) scaleY(0.4) scaleZ(0.3);
    }
    40% {
      transform: scaleX(1) scaleY(0.4) scaleZ(2);
    }
    60% {
      transform: scaleX(2) scaleY(0.4) scaleZ(2);
    }
    80% {
      transform: scaleX(2) scaleZ(0.5) translateY(calc(var(--size) * 1));
    }
    100% {
      transform: scaleX(1) scaleY(0.5) scaleZ(1)
        translateY(calc(var(--size) * -1));
    }
  }

  @keyframes color {
    42% {
      background-color: var(--bg-color);
    }
    48%,
    64% {
      background-color: hsl(170, 100%, 44%);
    }
    66% {
      background-color: var(--bg-color);
    }
  }
`;
