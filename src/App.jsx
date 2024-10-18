import React from 'react';
import { Box, Stack } from '@mui/material';
import FirstBox from './LeftSide/FirstBox';
import SecondBox from './LeftSide/SecondBox';

const App = () => {
  return (
    <>
      <Box sx={{ width: "516px" }}>
        <Stack direction="column"
          spacing={4}
          sx={{
            justifyContent: "space-between",
            alignItems: "flex-start",
            padding: "18px"
          }}>
          <FirstBox />
          <SecondBox></SecondBox>
        </Stack>
      </Box>
    </>
  );
};

export default App;
