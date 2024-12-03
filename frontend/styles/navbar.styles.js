import styled from '@emotion/styled';

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #1c1c1c;
  color: white;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  transition: box-shadow 0.3s ease;

  @media (max-width: 425px) {
    padding: 8px 10px;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 27px;

  span {
    margin: 0 10px;
    font-weight: lighter;
  }

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  @media (max-width: 425px) {
    font-size: 20px;
    img {
      width: 35px;
      height: 35px;
    }
  }
`;

export const UserButton = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
  position: relative;

  &:hover {
    color: #f39c12;
  }

  @media (max-width: 425px) {
    font-size: 18px;
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #2e2e2e;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  z-index: 1000;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  padding: 5px 0;
`;

export const DropdownItem = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px 15px;
  background-color: #2e2e2e;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    color: #f39c12;
  }

  svg {
    margin-right: 8px;
    font-size: 18px;

    &:hover {
      color: #f39c12;
    }
  }

  @media (max-width: 425px) {
    font-size: 14px;
    padding: 8px 12px;
  }
`;