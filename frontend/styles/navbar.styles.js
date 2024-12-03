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
  z-index: 10; /* Aseguramos que el menú esté por encima */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  transition: box-shadow 0.3s ease;

  @media (max-width: 768px) {
    padding: 8px 15px; /* Menor padding en tablets */
  }

  @media (max-width: 425px) {
    padding: 10px 12px; /* Reducción de espacio en pantallas más pequeñas */
    flex-direction: column;
    justify-content: center;
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

  @media (max-width: 768px) {
    font-size: 24px;
    img {
      width: 35px;
      height: 35px;
    }
  }

  @media (max-width: 425px) {
    font-size: 20px;
    img {
      width: 30px;
      height: 30px;
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
  z-index: 11; /* Mantener el botón por encima */

  &:hover {
    color: #f39c12;
  }

  @media (max-width: 768px) {
    font-size: 18px; /* Reducción en tabletas */
  }

  @media (max-width: 425px) {
    font-size: 16px; /* Reducción en pantallas más pequeñas */
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%; /* Aparece debajo del botón */
  right: 0;
  background-color: #2e2e2e;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  z-index: 100;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  padding: 5px 0;
  width: 200px;
  min-width: 150px; /* Un tamaño mínimo para evitar que se vea pequeño */
  max-height: 300px; /* Limitar altura si es necesario */
  overflow-y: auto; /* Permitir desplazamiento si el menú es muy largo */

  @media (max-width: 768px) {
    width: 180px; /* Ajuste para tabletas */
  }

  @media (max-width: 425px) {
    width: 100%; /* Se ajusta al ancho completo en pantallas pequeñas */
    position: absolute;
    left: 0;
    top: 10px;
    max-height: 300px; /* Se limita la altura en pantallas pequeñas */
    overflow-y: auto; /* Se permite el desplazamiento si es necesario */
  }
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

  @media (max-width: 768px) {
    font-size: 15px; /* Ajuste para tabletas */
    padding: 8px 12px;
  }

  @media (max-width: 425px) {
    font-size: 14px; /* Ajuste para pantallas pequeñas */
    padding: 8px 10px; /* Reducir el padding */
  }
`;