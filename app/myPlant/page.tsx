"use client";
import styled from "@emotion/styled";

const MyPlantPage = () => {
  return (
    <Container>
      <Title>내 주변 식물 지도</Title>
      <Flex>
        {new Array(4).fill(0).map((_, index) => (
          <FlexElement key={index}>
            <div className="flex justify-between">
              <div className="font-semibold">뭬리</div>
              <Deday>D+142</Deday>
            </div>
            <div className="absolute bottom-[18px] right-[18px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
              >
                <circle cx="14" cy="14" r="14" fill="#00AE07" />
              </svg>
            </div>
          </FlexElement>
        ))}
      </Flex>
    </Container>
  );
};

export default MyPlantPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 32px;
`;

const Title = styled.div`
  color: var(--black-white-black, #212121);
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px; /* 100% */
`;

const Flex = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 16px;
  width: 100%;
  margin-top: 16px;
`;

const FlexElement = styled.div`
  width: 155px;
  height: 155px;
  background: #f1f1f1;
  border-radius: 14px;
  padding: 18px;
  position: relative;
  &:hover {
    background-color: #e1e1e1;
  }
`;

const Deday = styled.div`
  border-radius: 8px;
  background: #d0f4d2;
  padding: 4px 8px;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 12px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #06ba0d;
`;
