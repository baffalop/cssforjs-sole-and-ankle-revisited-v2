import React from 'react';
import { Dialog, DialogClose, DialogContent, DialogOverlay, DialogPortal, DialogTitle } from '@radix-ui/react-dialog'
import styled from 'styled-components';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import Spacer from '../Spacer';
import NavLink from '../NavLink';

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Dialog open={isOpen}>
      <DialogPortal>
        <Overlay onClick={onDismiss}>
          <Content>
            <DialogTitle asChild><VisuallyHidden>Menu</VisuallyHidden></DialogTitle>

            <DialogClose asChild>
              <Dismiss onClick={onDismiss}>
                <Icon id="close" />
                <VisuallyHidden>Dismiss menu</VisuallyHidden>
              </Dismiss>
            </DialogClose>

            <Spacer />

            <Nav>
              <NavLink href="/sale">Sale</NavLink>
              <NavLink href="/new">New&nbsp;Releases</NavLink>
              <NavLink href="/men">Men</NavLink>
              <NavLink href="/women">Women</NavLink>
              <NavLink href="/kids">Kids</NavLink>
              <NavLink href="/collections">Collections</NavLink>
            </Nav>

            <Footer>
              <a href="/terms">Terms and Conditions</a>
              <a href="/privacy">Privacy Policy</a>
              <a href="/contact">Contact Us</a>
            </Footer>
          </Content>
        </Overlay>
      </DialogPortal>
    </Dialog>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

const Content = styled(DialogContent)`
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
