import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

export const Header = styled.div`
  margin-bottom: 30px;
  color: #d32f2f;

  h1 {
    margin-top: 20px;
    font-size: 3rem;
    font-weight: bold;
  }

  @media (max-width: 1024px) {
    h1 {
      font-size: 2.5rem;
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 1.5rem;
    }
  }
`;

export const Message = styled.div`
  font-size: 1.2rem;
  color: #fff;
  max-width: 500px;
  margin-bottom: 30px;

  strong {
    color: #d32f2f;
  }

  @media (max-width: 1024px) {
    font-size: 1.1rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    max-width: 90%;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const NotificationContainer = styled.div`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
  border-radius: 5px;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 80%;
  max-width: 400px;
  z-index: 9999;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;

  @media (max-width: 768px) {
    width: 90%;
    padding: 12px;
  }

  @media (max-width: 480px) {
    width: 95%;
    padding: 10px;
  }
`;

export const NotificationIconWrapper = styled.div`
  margin-right: 10px;
`;

export const NotificationMessage = styled.div`
  font-size: 1rem;
  font-weight: 500;
  flex-grow: 1;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const Footer = styled.div`
  font-size: 1rem;
  color: #fff;
  margin-top: 20px;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const NotificationIcon = styled.div`
  font-size: 2rem;
  color: #f0a500;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;