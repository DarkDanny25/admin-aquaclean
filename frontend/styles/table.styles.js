import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-20px);
  }
`;

const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(1);
  }
`;

export const TableContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 35vh;
  padding: 20px;
  flex-direction: column;
  width: 100%;
  background-color: #2e2e2e;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 425px) {
    padding: 10px;
  }
`;

export const NotificationWrapper = styled.div`
  position: fixed;
  top: 20px;
  left: 41%;
  transform: translateX(-50%);
  background-color: ${(props) => (props.type === 'success' ? '#4caf50' : '#e74c3c')};
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  animation: ${(props) => (props.isExiting ? fadeOut : fadeIn)} 0.5s ease forwards;
  z-index: 1000;
  max-width: 90%;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 16px;
  }

  @media (max-width: 425px) {
    font-size: 12px;
    padding: 6px 12px;
  }
`;

export const NotificationIcon = styled.div`
  font-size: 20px;
`;

export const Table = styled.table`
  width: 70%;
  border-collapse: collapse;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #333;
  border-radius: 8px;
  overflow: hidden;
  table-layout: fixed;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 12px;
  }

  @media (max-width: 425px) {
    width: 100%;
    font-size: 10px;
  }
`;

export const TableHeader = styled.th`
  background-color: #444;
  color: white;
  padding: 10px;
  text-align: left;
  font-size: 14px;
  font-weight: bold;

  @media (max-width: 768px) {
    padding: 8px;
    font-size: 12px;
  }

  @media (max-width: 425px) {
    padding: 6px;
    font-size: 10px;
  }
`;

export const TableCell = styled.td`
  padding: 10px;
  font-size: 14px;
  color: white;
  text-align: left;
  overflow: hidden;

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 8px;
  }

  @media (max-width: 425px) {
    font-size: 10px;
    padding: 6px;
  }
`;

export const ButtonEdit = styled.button`
  background-color: transparent;
  border: 2px solid transparent;
  cursor: pointer;
  margin: 0 5px;
  padding: 5px;
  font-size: 18px;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.7;
  }

  color: #f1c40f;

  @media (max-width: 425px) {
    font-size: 16px;
    padding: 4px;
  }
`;

export const ButtonDelete = styled.button`
  background-color: transparent;
  border: 2px solid transparent;
  cursor: pointer;
  margin: 0 2.5px;
  padding: 5px;
  font-size: 18px;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.7;
  }

  color: #e74c3c;

  @media (max-width: 425px) {
    font-size: 16px;
    padding: 4px;
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: #333;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 400px;
  text-align: center;

  @media (max-width: 425px) {
    width: 90%;
    padding: 20px;
  }
`;

export const WarningIconWrapper = styled.div`
  font-size: 50px;
  color: #f1c40f;
  animation: ${pulseAnimation} 1s infinite;

  @media (max-width: 425px) {
    font-size: 40px;
  }
`;

export const ModalButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const ModalButton = styled.button`
  background-color: ${(props) => (props.confirm ? '#e74c3c' : '#666')};
  color: white;
  border: none;
  padding: 10px 20px;
  margin: 0 10px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${(props) => (props.confirm ? '#c0392b' : '#555')};
  }

  @media (max-width: 425px) {
    padding: 8px 16px;
    font-size: 14px;
  }
`;

export const TableTitle = styled.h1`
  color: white;
  text-align: center;
  font-size: 30px;
  margin-top: 25px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 425px) {
    font-size: 20px;
    margin-top: 15px;
  }
`;

export const SearchInputWrapper = styled.div`
  width: 22%;
  margin-top: 120px;
  margin-left: 16%;
  margin-bottom: 20px;
  display: flex;
  justify-content: flex-start;
  position: relative;

  @media (max-width: 768px) {
    width: 50%;
    margin-top: 60px;
    margin-left: 25%;
  }

  @media (max-width: 425px) {
    width: 80%;
    margin-top: 20px;
    margin-left: 10%;
  }
`;

export const SearchInput = styled.input`
  padding: 12px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #666;
  width: 100%;
  background-color: #444;
  padding-left: 30px;
  color: white;
  outline: none;

  &:focus {
    border-color: #f39c12;
    box-shadow: 0 0 5px #f39c12;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding-left: 25px;
  }

  @media (max-width: 425px) {
    font-size: 12px;
    padding-left: 20px;
  }
`;

export const SearchIcon = styled.div`
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  color: #bbb;
  font-size: 18px;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 425px) {
    font-size: 14px;
  }
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  @media (max-width: 425px) {
    margin-top: 10px;
  }
`;

export const PaginationButton = styled.button`
  background-color: transparent;
  border: 1px solid #666;
  color: white;
  padding: 8px 16px;
  margin: 0 5px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #444;
  }

  &.active {
    background-color: #f39c12;
    color: black;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  @media (max-width: 425px) {
    padding: 6px 12px;
    font-size: 14px;
  }
`;