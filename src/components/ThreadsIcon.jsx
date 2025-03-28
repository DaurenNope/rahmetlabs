import React from 'react';
import { Box } from '@mui/material';

const ThreadsIcon = (props) => (
  <Box
    component="img"
    src="/logo/threads-logo-white-01.png"
    alt="Threads"
    sx={{
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      ...props.sx
    }}
    {...props}
  />
);

export default ThreadsIcon;