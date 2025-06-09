import React from 'react';
import { Box, Typography, Container, TextField, Button, Link as MuiLink } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const UserLoginPage = () => {
  return (
    <Container sx={{ py: 5 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Login do Usuário
        </Typography>
      </Box>
      <Box component="form" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, maxWidth: '400px', margin: '0 auto' }}>
        <TextField label="Email" variant="outlined" fullWidth type="email" />
        <TextField label="Senha" variant="outlined" fullWidth type="password" />
        <Button variant="contained" color="primary" sx={{ mt: 2, width: '100%' }}>
          Entrar
        </Button>
        <Typography variant="body2" sx={{ mt: 2 }}>
          Não tem uma conta?{' '}
          <MuiLink component={RouterLink} to="/user/register">
            Registre-se aqui
          </MuiLink>
        </Typography>
      </Box>
    </Container>
  );
};

export default UserLoginPage;