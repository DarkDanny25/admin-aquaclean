import styled from '@emotion/styled';

export const NotificationWrapper = styled.div`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
`;

export const Notification = styled.div`
  background-color: ${(props) => (props.type === 'success' ? '#2ecc71' : '#e74c3c')};
  color: white;
  padding: 15px 20px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);

  svg {
    font-size: 18px;
  }
`;

export const Form = styled.form`
  max-width: 400px;
  margin: 50px auto;
  background-color: #333;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  color: white;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 20px;
    margin: 20px auto;
  }

  @media (max-width: 480px) {
    padding: 15px;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 20px;

  @media (max-width: 480px) {
    margin-bottom: 15px;
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  font-size: 18px;
  color: #bbb;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 40px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #555;
  background-color: #444;
  color: white;
  outline: none;

  &:focus {
    border-color: #f39c12;
    box-shadow: 0 0 5px #f39c12;
  }

  @media (max-width: 480px) {
    padding: 10px 35px;
    font-size: 14px;
  }
`;

export const TextAreaWrapper = styled.div`
  position: relative;
  margin-bottom: 20px;

  @media (max-width: 480px) {
    margin-bottom: 15px;
  }
`;

export const TextAreaIconWrapper = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 18px;
  color: #bbb;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 40px 12px 12px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #555;
  background-color: #444;
  color: white;
  outline: none;
  min-height: 100px;
  resize: vertical;

  &:focus {
    border-color: #f39c12;
    box-shadow: 0 0 5px #f39c12;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 30px 10px 10px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    padding: 25px 8px 8px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f39c12;
  color: white;
  border: none;
  padding: 10px 18px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e67e22;
  }

  svg {
    margin-right: 8px;
  }

  @media (max-width: 480px) {
    padding: 8px 14px;
    font-size: 14px;
  }
`;

export const BackButton = styled(Button)`
  background-color: #555;

  &:hover {
    background-color: #444;
  }
`;