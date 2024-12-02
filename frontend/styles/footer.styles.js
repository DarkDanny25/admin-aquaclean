import styled from '@emotion/styled';

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #1c1c1c;
  color: white;
  position: relative;
  bottom: 0;
  width: 100%;
  margin-top: 25px;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 20px;
  }

  @media (max-width: 425px) {
    padding: 15px;
  }
`;

export const FooterText = styled.div`
  font-size: 14px;
  font-weight: lighter;

  @media (max-width: 768px) {
    font-size: 12px;
    margin-bottom: 10px;
  }

  @media (max-width: 425px) {
    font-size: 11px;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 15px;

  @media (max-width: 768px) {
    gap: 10px;
  }

  @media (max-width: 425px) {
    gap: 8px;
  }
`;

export const SocialButton = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    color: #f39c12;
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 425px) {
    font-size: 16px;
  }
`;