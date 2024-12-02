import styled from '@emotion/styled';

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  background-color: #2e2e2e;
  position: relative;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

export const Card = styled.div`
  background-color: #1c1c1c;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;

  @media (max-width: 768px) {
    padding: 30px;
    max-width: 350px;
  }

  @media (max-width: 480px) {
    padding: 20px;
    max-width: 100%;
  }
`;

export const FormTitle = styled.h1`
  color: #f39c12;
  font-size: 2.5rem;
  margin-bottom: 20px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const InputField = styled.input`
  width: 100%;
  padding: 12px 40px 12px 40px;
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

  @media (max-width: 768px) {
    padding: 10px 35px;
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    padding: 10px 30px;
    font-size: 0.9rem;
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
  transition: background-color 0.3s;

  &:hover {
    background-color: #e67e22;
  }

  @media (max-width: 768px) {
    padding: 10px;
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    padding: 10px;
    font-size: 0.95rem;
  }
`;

export const ErrorMessage = styled.p`
  color: #e74c3c;
  font-size: 1rem;
  margin-top: 10px;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const LinkWrapper = styled.div`
  text-align: center;
  color: #fff;
  margin-top: 10px;

  p {
    margin: 0;
  }

  a {
    color: #f39c12;
    text-decoration: none;
    font-weight: bold;
    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 480px) {
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

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: #1c1c1c;
  padding: 40px;
  border-radius: 8px;
  width: 100%;
  max-width: 400px;

  @media (max-width: 768px) {
    padding: 30px;
    max-width: 350px;
  }

  @media (max-width: 480px) {
    padding: 20px;
    max-width: 100%;
  }
`;

export const ModalInputField = styled.input`
  width: 100%;
  padding: 12px 40px 12px 40px;
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

  @media (max-width: 768px) {
    padding: 10px 35px;
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    padding: 10px 30px;
    font-size: 0.9rem;
  }
`;

export const ModalButton = styled.button`
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: none;
  border-radius: 8px;
  background-color: #f39c12;
  color: #fff;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e67e22;
  }

  @media (max-width: 768px) {
    padding: 10px;
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    padding: 10px;
    font-size: 0.95rem;
  }
`;

export const CancelButton = styled.button`
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 8px;
  background-color: #e74c3c;
  color: #fff;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #c0392b;
  }

  @media (max-width: 768px) {
    padding: 10px;
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    padding: 10px;
    font-size: 0.95rem;
  }
`;

export const FloatingNotification = styled.div`
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #2ecc71;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  font-size: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 80%;
  word-wrap: break-word;

  @media (max-width: 480px) {
    font-size: 0.9rem;
    max-width: 90%;
  }
`;

export const PasswordIconWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  color: #bdc3c7;
  font-size: 1.2rem;
  cursor: pointer;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;