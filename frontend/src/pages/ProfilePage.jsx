import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const ProfilePage = () => {
  return (
    <Container sx={{ py: 5 }}>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Meu Perfil
        </Typography>
        <Typography variant="body1">
          Informações do seu perfil.
        </Typography>
        {/* Conteúdo da página de perfil aqui */}
      </Box>
    </Container>
  );
};

export default ProfilePage;