import React from 'react';
import styled from 'styled-components';

import { BREAKPOINTS, COLORS, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from '../Icon';
import UnstyledButton from '../UnstyledButton';
import NavLink from '../NavLink';

const navColor = COLORS.gray[900];
const navIconSize = 28;
const navStroke = 2.5;

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);
  const toggleMobileMenu = () => setShowMobileMenu(!showMobileMenu);

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>

        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>

        <Side>
        </Side>

        <MobileBar>
          <UnstyledButton>
            <Icon id="shopping-bag" color={navColor} size={navIconSize} strokeWidth={navStroke} />
          </UnstyledButton>
          <UnstyledButton>
            <Icon id="search" color={navColor} size={navIconSize} strokeWidth={navStroke} />
          </UnstyledButton>
          <UnstyledButton onClick={toggleMobileMenu}>
            <Icon id="menu" color={navColor} size={navIconSize} strokeWidth={navStroke} />
          </UnstyledButton>
        </MobileBar>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  overflow: auto;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: ${BREAKPOINTS.phone}) {
    padding: 16px 20px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(0.25rem, 3.5rem, 7vw - 3rem);
  margin: 0px 48px;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    display: none;
  }
`;

const Side = styled.div`
  flex: 1;
`;

const MobileBar = styled.div`
  display: none;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 32px;
  }

  @media (max-width: ${BREAKPOINTS.phone}) {
    gap: 16px;
  }
`;

export default Header;
