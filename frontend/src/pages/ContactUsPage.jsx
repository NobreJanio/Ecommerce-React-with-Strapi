import React from 'react';
import { Box, Typography, Container, TextField, Button, Grid } from '@mui/material';

const ContactUsPage = () => {
  return (
    <Container sx={{ py: 5 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Entre em Contato
        </Typography>
        <Typography variant="body1">
          Tem alguma dúvida ou precisa de ajuda? Preencha o formulário abaixo.
        </Typography>
      </Box>
      <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField label="Nome" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Email" variant="outlined" fullWidth type="email" />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Assunto" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Mensagem" variant="outlined" multiline rows={6} fullWidth />
          </Grid>
        </Grid>
        <Button variant="contained" color="primary" sx={{ mt: 2, alignSelf: 'center' }}>
          Enviar Mensagem
        </Button>
      </Box>
    </Container>
  );
};

export default ContactUsPage;