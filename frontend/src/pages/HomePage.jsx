import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Main from '../components/main/main'; // Assumindo que Main é o conteúdo da Home

const HomePage = () => {
  return (
    <Container sx={{ py: 5 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        {/* Você pode adicionar um título para a HomePage aqui se desejar, por exemplo: */}
        {/* <Typography variant="h4" component="h1" gutterBottom>
          Bem-vindo à Nossa Loja
        </Typography> */}
      </Box>
      <Main />
    </Container>
  );
};

export default HomePage;