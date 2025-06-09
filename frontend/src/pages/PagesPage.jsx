import React from 'react';
import { Box, Typography, Container, List, ListItem, ListItemText, Paper } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const PagesPage = () => {
  return (
    <Container sx={{ py: 5 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Pages
        </Typography>
        <Typography variant="body1">
          Esta é uma página genérica que pode listar outras sub-páginas ou conteúdo diverso.
        </Typography>
      </Box>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Sub-páginas disponíveis:
        </Typography>
        <List>
          <ListItem disablePadding>
            <RouterLink to="/pages/page1" style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}>
              <ListItemText primary="Página 1" />
            </RouterLink>
          </ListItem>
          <ListItem disablePadding>
            <RouterLink to="/pages/page2" style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}>
              <ListItemText primary="Página 2" />
            </RouterLink>
          </ListItem>
          {/* Adicione mais links para outras páginas conforme necessário */}
        </List>
      </Paper>
    </Container>
  );
};

export default PagesPage;