import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const DashboardPage = () => {
  return (
    <Container sx={{ py: 5 }}>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Dashboard
        </Typography>
        <Typography variant="body1">
          Bem-vindo ao seu Dashboard!
        </Typography>
        {/* Conteúdo específico do dashboard aqui */}
      </Box>
    </Container>
  );
};

export default DashboardPage;