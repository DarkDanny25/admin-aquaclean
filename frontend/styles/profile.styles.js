import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const shake = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-5px); }
  100% { transform: translateX(0); }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background: #333;
  color: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  width: 450px;
  margin: 50px auto;

  @media (max-width: 768px) {
    width: 90%;
    padding: 30px;
  }

  @media (max-width: 425px) {
    width: 100%;
    margin: 20px auto;
    padding: 20px;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  position: relative;
  width: 100%;
`;

export const IconWrapper = styled.div`
  position: absolute;
  left: 10px;
  font-size: 18px;
  color: #bbb;

  @media (max-width: 425px) {
    font-size: 16px;
  }
`;

export const Input = styled.input`
  padding: 12px 12px 12px 40px;
  border: 1px solid #555;
  border-radius: 5px;
  width: 100%;
  background-color: #666;
  color: white;
  font-size: 16px;
  outline: none;

  &:focus {
    border-color: #f39c12;
    box-shadow: 0 0 5px #f39c12;
  }

  @media (max-width: 425px) {
    padding: 10px 10px 10px 35px;
    font-size: 14px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;

  @media (max-width: 425px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const Button = styled.button`
  background-color: #f39c12;
  color: white;
  padding: 7px 12px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 46%;

  &:hover {
    background-color: #e67e22;
  }

  @media (max-width: 425px) {
    width: 100%;
    font-size: 14px;
  }
`;

export const DeleteButton = styled(Button)`
  background-color: #dc3545;

  &:hover {
    background-color: #c82333;
  }
`;

export const Notification = styled.div`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${(props) => (props.type === 'success' ? '#28a745' : '#dc3545')};
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  z-index: 1000;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;

  @media (max-width: 425px) {
    font-size: 14px;
    padding: 8px 15px;
  }
`;

export const NotificationIcon = styled.div`
  margin-right: 10px;
  font-size: 18px;

  @media (max-width: 425px) {
    font-size: 16px;
  }
`;

export const PasswordToggleIcon = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-45%);
  font-size: 20px;
  cursor: pointer;
  color: #bbb;

  @media (max-width: 425px) {
    font-size: 18px;
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  @media (max-width: 425px) {
    padding: 10px;
  }
`;

export const ModalContent = styled.div`
  background: #1c1c1c;
  padding: 20px;
  border-radius: 10px;
  width: 400px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 425px) {
    width: 90%;
    padding: 15px;
  }
`;

export const ModalHeader = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
  color: #fff;
  text-align: center;

  @media (max-width: 425px) {
    font-size: 16px;
  }
`;

export const ModalBody = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
  color: #fff;
  text-align: center;

  @media (max-width: 425px) {
    font-size: 14px;
  }
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;

  @media (max-width: 425px) {
    flex-direction: column;
    gap: 8px;
  }
`;

export const CancelButton = styled.button`
  background-color: #666;
  color: white;
  padding: 12px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #555;
  }

  @media (max-width: 425px) {
    width: 100%;
    padding: 10px 15px;
    font-size: 14px;
  }
`;

export const ConfirmDeleteButton = styled.button`
  background-color: #dc3545;
  color: white;
  padding: 12px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #c82333;
  }

  @media (max-width: 425px) {
    width: 100%;
    padding: 10px 15px;
    font-size: 14px;
  }
`;

export const WarningIcon = styled.div`
  font-size: 40px;
  color: #f39c12;
  margin-bottom: 15px;
  animation: ${shake} 1s infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 425px) {
    font-size: 30px;
  }
`;