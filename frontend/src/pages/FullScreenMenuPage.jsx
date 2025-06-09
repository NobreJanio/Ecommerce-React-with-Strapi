import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const FullScreenMenuPage = () => {
  return (
    <Container sx={{ py: 5 }}>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Full Screen Menu Page
        </Typography>
        <Typography variant="body1">
          Conteúdo da página Full Screen Menu.
        </Typography>
        {/* Adicionar aqui os links específicos do Full Screen Menu */}
      </Box>
    </Container>
  );
};

export default FullScreenMenuPage;