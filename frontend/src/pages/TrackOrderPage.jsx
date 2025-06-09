import React from 'react';
import { Box, Typography, Container, TextField, Button } from '@mui/material';

const TrackOrderPage = () => {
  return (
    <Container sx={{ py: 5 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Rastrear Pedido
        </Typography>
      </Box>
      <Box component="form" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
        <TextField label="Número do Pedido" variant="outlined" sx={{ width: '100%', maxWidth: '400px' }} />
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Rastrear
        </Button>
      </Box>
      {/* Aqui você pode adicionar a lógica para exibir o status do pedido */}
    </Container>
  );
};

export default TrackOrderPage;