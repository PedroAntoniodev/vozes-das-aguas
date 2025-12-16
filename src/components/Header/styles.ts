import styled from 'styled-components';
import { Colors } from '../../styles/';

interface HeaderProps {
  $scrolled: boolean;
  $menuOpen: boolean;
}

interface NavProps {
  $menuOpen: boolean;
}

export const HeaderContainer = styled.header<HeaderProps>`
  max-width: 100%;
  height: 120px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background-color: ${({ $scrolled, $menuOpen }) =>
    $scrolled || $menuOpen ? Colors.white : 'transparent'};
  box-shadow: ${({ $scrolled, $menuOpen }) =>
    $scrolled || $menuOpen ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none'};

  transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
`;

export const HeaderContent = styled.div`
  max-width: 1024px;
  height: 100%;
  margin: 0 auto;
  padding: 0 16px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  height: 120px;
  cursor: pointer;
  margin: 16px;

  @media (max-width: 768px) {
    height: 80px;
  }
`;

export const NavLinks = styled.nav<NavProps>`
  display: flex;
  gap: 16px;
  a {
    color: ${Colors.blue};
    text-decoration: none;
    margin: 16px;
    font-family: 'Bebas Neue', sans-serif;
    font-weight: 400;
    font-size: 18px;
    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    position: absolute;
    top: 120px;
    left: 0;
    width: 100%;
    background-color: ${Colors.white};

    transform: ${({ $menuOpen }) =>
      $menuOpen ? 'translateX(0)' : 'translateX(-200%)'};
    transition: transform 0.3s ease-in-out;
  }
`;

export const HamburguerMenu = styled.button<NavProps>`
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;

  span {
    width: 25px;
    height: 3px;
    background: ${Colors.blue};
    border-radius: 2px;
    transition: all 0.3s ease;
  }

  span:nth-child(1) {
    transform: ${({ $menuOpen }) =>
      $menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'rotate(0)'};
  }

  span:nth-child(2) {
    opacity: ${({ $menuOpen }) => ($menuOpen ? 0 : 1)};
  }

  span:nth-child(3) {
    transform: ${({ $menuOpen }) =>
      $menuOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'rotate(0)'};
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const NavList = styled.ul`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 16px 0;
    align-items: center;
    width: 100%;

    li {
      width: 100%;
      text-align: center;
    }
  }
`;
