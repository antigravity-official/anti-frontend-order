import { Box, Link } from '@mui/material';
import { Container } from '@mui/system';
import { Outlet } from 'react-router-dom';

export default function RootLayout() {
  return (
    <>
      <Container maxWidth="sm">
        <Box
          sx={{
            display: 'flex',
            gap: 2,
          }}
        >
          <Link href="/">Home</Link>
          <Link href="/orders">Orders</Link>
        </Box>
        <Outlet />
      </Container>
    </>
  );
}
