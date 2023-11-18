import styled from "@emotion/styled";

type CustomInputProps = {
  register?: any;
  placeholder: string;
  icons?: React.ReactNode;
  name?: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
};

const CustomInput = ({
  register,
  placeholder,
  icons,
  ...props
}: CustomInputProps) => {
  return (
    <Container>
      <Input {...register} placeholder={placeholder} {...props} />
      {icons && <IconContainer>{icons}</IconContainer>}
    </Container>
  );
};

export default CustomInput;

const Container = styled.div`
  display: flex;
  items-align: center;
  justify-content: space-between;
  border-radius: 10px;
  border: 1px solid #fff;
  opacity: 0.6;
  background: rgba(255, 255, 255, 0.6);
  box-shadow: 0px 4px 16px 0px rgba(1, 74, 0, 0.2);
  padding: 0 16px;
  margin-bottom: 16px;
  width: 310px;
  height: 46px;
`;

const Input = styled.input`
  width: 100%;
  height: 46px;
  color: #212121;
  font-family: Pretendard Variable;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.02em;
  text-align: left;
  outline: none;
  background: transparent;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  height: 100%;
`;
