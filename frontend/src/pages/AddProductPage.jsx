import React from 'react';
import { Box, Typography, Container, TextField, Button } from '@mui/material';

const AddProductPage = () => {
  return (
    <Container sx={{ py: 5 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Adicionar Novo Produto
        </Typography>
      </Box>
      <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField label="Nome do Produto" variant="outlined" />
        <TextField label="Descrição" variant="outlined" multiline rows={4} />
        <TextField label="Preço" variant="outlined" type="number" />
        <TextField label="Categoria" variant="outlined" />
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Salvar Produto
        </Button>
      </Box>
    </Container>
  );
};

export default AddProductPage;