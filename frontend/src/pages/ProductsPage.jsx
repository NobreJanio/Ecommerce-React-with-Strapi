import React from 'react';
import { Box, Typography, Container, Button, Stack } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const ProductsPage = () => {
  return (
    <Container sx={{ py: 5 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Gerenciamento de Produtos
        </Typography>
      </Box>
      <Stack direction="row" spacing={2} justifyContent="center">
        <Button component={RouterLink} to="/mega-menu/products/add" variant="contained">
          Adicionar Produto
        </Button>
      </Stack>
      {/* Conteúdo da página de produtos, como listagem de produtos, etc. */}
    </Container>
  );
};

export default ProductsPage;