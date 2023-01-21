import { Box, Typography } from '@mui/material';

export default function Error404Page() {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography>Error 404: page not found</Typography>
    </Box>
  );
}
