import styled from '@emotion/styled';

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #2e2e2e;
  padding: 20px;
`;

export const Card = styled.div`
  background-color: #1c1c1c;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  box-sizing: border-box;

  @media (max-width: 425px) {
    padding: 20px;
    max-width: 100%;
  }
`;

export const FormTitle = styled.h1`
  color: #f39c12;
  font-size: 2.5rem;
  margin-bottom: 20px;
  text-align: center;

  @media (max-width: 425px) {
    font-size: 2rem;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  margin: 12px 0;
`;

export const InputField = styled.input`
  width: 100%;
  padding: 12px 40px;
  padding-left: 40px;
  border: 2px solid #666;
  border-radius: 8px;
  background-color: #333;
  color: #ecf0f1;
  font-size: 1rem;
  transition: border-color 0.3s, box-shadow 0.3s;

  &:focus {
    border-color: #f39c12;
    box-shadow: 0 0 5px #f39c12;
    outline: none;
  }

  @media (max-width: 425px) {
    padding: 12px 30px;
    padding-left: 40px;
    font-size: 0.9rem;
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 12px;
  transform: translateY(-50%);
  color: #bdc3c7;
  font-size: 1.2rem;

  @media (max-width: 425px) {
    font-size: 1rem;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 12px;
  margin: 15px 0;
  border: none;
  border-radius: 8px;
  background-color: #f39c12;
  color: #fff;
  font-size: 1.1rem;
  cursor: pointer;

  &:hover {
    background-color: #e67e22;
  }

  @media (max-width: 425px) {
    padding: 10px;
    font-size: 1rem;
  }
`;

export const ErrorMessage = styled.p`
  color: #e74c3c;
  font-size: 1rem;
  margin-top: 10px;

  @media (max-width: 425px) {
    font-size: 0.9rem;
  }
`;

export const SuccessMessage = styled.p`
  color: #2ecc71;
  font-size: 1rem;
  margin-top: 10px;

  @media (max-width: 425px) {
    font-size: 0.9rem;
  }
`;

export const LinkWrapper = styled.div`
  text-align: center;
  color: #fff;
  margin-top: 10px;

  a {
    color: #f39c12;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 425px) {
    font-size: 0.9rem;
  }
`;

export const TogglePasswordButton = styled.button`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #bdc3c7;
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    color: #f39c12;
  }

  @media (max-width: 425px) {
    font-size: 1rem;
  }
`;