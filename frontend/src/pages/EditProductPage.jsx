import React from 'react';
import { Box, Typography, Container, TextField, Button } from '@mui/material';
import { useParams } from 'react-router-dom'; // Para obter o ID do produto a ser editado

const EditProductPage = () => {
  const { productId } = useParams(); // Exemplo de como obter o ID do produto da URL

  // Lógica para buscar dados do produto com base no productId pode ser adicionada aqui
  // e preencher os campos do formulário.

  return (
    <Container sx={{ py: 5 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Editar Produto (ID: {productId || 'N/A'})
        </Typography>
      </Box>
      <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField label="Nome do Produto" variant="outlined" defaultValue={``} />
        <TextField label="Descrição" variant="outlined" multiline rows={4} defaultValue={``} />
        <TextField label="Preço" variant="outlined" type="number" defaultValue={``} />
        <TextField label="Categoria" variant="outlined" defaultValue={``} />
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Salvar Alterações
        </Button>
      </Box>
    </Container>
  );
};

export default EditProductPage;