import React from 'react';
import { css } from '@emotion/react';
import { breakpoints } from '../styles/breakpoints';

const ResponsiveGrid = ({ children }) => (
  <div css={css`
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    
    @media (min-width: ${breakpoints.tablet}) {
      gap: 2rem;
    }
  `}>
    {children}
  </div>
);

export default ResponsiveGrid;