import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import Header from '../Header';
import ShoeIndex from '../ShoeIndex';

const App = () => {
  const [sortId, setSortId] = React.useState('newest');

  return (
    <ThemeProvider theme={{
      breakpoints: {
        phone: '37.5rem',
        tablet: '59.375rem',
        desktop: '81.25rem',
      }
    }}>
      <Header />
      <Main>
        <ShoeIndex sortId={sortId} setSortId={setSortId} />
      </Main>
    </ThemeProvider>
  );
};

const Main = styled.main`
  padding: 64px 32px;
`;

export default App;
