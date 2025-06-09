import React from 'react';
import { Box, Typography, Container, Paper, List, ListItem, ListItemText } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const VendorAccountPage = () => {
  return (
    <Container sx={{ py: 5 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Vendor Account
        </Typography>
        <Typography variant="body1">
          Gerencie sua conta de vendedor.
        </Typography>
      </Box>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Opções da Conta de Vendedor:
        </Typography>
        <List>
          <ListItem disablePadding>
            <RouterLink to="/vendor-account/login" style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}>
              <ListItemText primary="Login" />
            </RouterLink>
          </ListItem>
          <ListItem disablePadding>
            <RouterLink to="/vendor-account/register" style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}>
              <ListItemText primary="Registrar" />
            </RouterLink>
          </ListItem>
          {/* Adicione mais links para outras seções da conta do vendedor */}
        </List>
      </Paper>
    </Container>
  );
};

export default VendorAccountPage;