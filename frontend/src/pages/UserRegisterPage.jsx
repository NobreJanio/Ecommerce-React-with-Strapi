import React from 'react';
import { Box, Typography, Container, TextField, Button, Link as MuiLink } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const UserRegisterPage = () => {
  return (
    <Container sx={{ py: 5 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Registrar Nova Conta
        </Typography>
      </Box>
      <Box component="form" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, maxWidth: '400px', margin: '0 auto' }}>
        <TextField label="Nome Completo" variant="outlined" fullWidth />
        <TextField label="Email" variant="outlined" fullWidth type="email" />
        <TextField label="Senha" variant="outlined" fullWidth type="password" />
        <TextField label="Confirmar Senha" variant="outlined" fullWidth type="password" />
        <Button variant="contained" color="primary" sx={{ mt: 2, width: '100%' }}>
          Registrar
        </Button>
        <Typography variant="body2" sx={{ mt: 2 }}>
          Já tem uma conta?{' '}
          <MuiLink component={RouterLink} to="/user/login">
            Faça login aqui
          </MuiLink>
        </Typography>
      </Box>
    </Container>
  );
};

export default UserRegisterPage;