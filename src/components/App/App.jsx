import React from 'react';
import styled from 'styled-components';

import { BREAKPOINTS } from '../../constants';
import Header from '../Header';
import ShoeIndex from '../ShoeIndex';

const App = () => {
  const [sortId, setSortId] = React.useState('newest');

  return (
    <>
      <Header />
      <Main>
        <ShoeIndex sortId={sortId} setSortId={setSortId} />
      </Main>
    </>
  );
};

const Main = styled.main`
  padding: 64px 32px;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    padding: 32px 32px;
  }

  @media (max-width: ${BREAKPOINTS.phone}) {
    padding: 32px 16px;
  }
`;

export default App;
