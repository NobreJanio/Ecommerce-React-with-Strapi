import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const OrdersPage = () => {
  return (
    <Container sx={{ py: 5 }}>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Meus Pedidos
        </Typography>
        <Typography variant="body1">
          Visualize o histórico dos seus pedidos.
        </Typography>
        {/* Conteúdo da página de pedidos aqui */}
      </Box>
    </Container>
  );
};

export default OrdersPage;