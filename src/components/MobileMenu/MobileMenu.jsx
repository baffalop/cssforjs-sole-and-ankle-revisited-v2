import React from 'react';
import styled from 'styled-components';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import Spacer from '../Spacer';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay onClick={onDismiss}>
      <Wrapper>
        <Dismiss onClick={onDismiss}>
          <Icon id="close" />
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
        </Dismiss>

        <Spacer />

        <Nav>
          <a href="/sale">Sale</a>
          <a href="/new">New&nbsp;Releases</a>
          <a href="/men">Men</a>
          <a href="/women">Women</a>
          <a href="/kids">Kids</a>
          <a href="/collections">Collections</a>
        </Nav>

        <Footer>
          <a href="/terms">Terms and Conditions</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
        </Footer>
      </Wrapper>
    </Overlay>
  );
};

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

const Wrapper = styled.div`
  padding: 32px;
  height: 100%;
  width: 20rem;
  max-width: 100%;
  margin-left: auto;
  background-color: white;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Dismiss = styled(UnstyledButton)`
  position: absolute;
  top: 26px;
  right: 16px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & a {
    text-transform: uppercase;
    color: black;
    text-decoration: none;
    font-weight: 600;
    font-size: ${18/16}rem;
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: ${14/16}rem;

  & a {
    color: gray;
    text-decoration: none;
    font-size: ${14/16}rem;
  }
`;

export default MobileMenu;
