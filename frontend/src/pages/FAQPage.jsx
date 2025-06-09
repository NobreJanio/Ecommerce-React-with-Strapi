import React from 'react';
import { Box, Typography, Container, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqs = [
  {
    question: 'Como posso rastrear meu pedido?',
    answer: 'Você pode rastrear seu pedido na página "Rastrear Pedido" inserindo o número do seu pedido.',
  },
  {
    question: 'Quais são as opções de pagamento?',
    answer: 'Aceitamos cartões de crédito, débito e PayPal.',
  },
  {
    question: 'Qual é a política de devolução?',
    answer: 'Você pode devolver produtos em até 30 dias após a compra. Consulte nossa política de devolução completa para mais detalhes.',
  },
  // Adicione mais FAQs conforme necessário
];

const FAQPage = () => {
  return (
    <Container sx={{ py: 5 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Perguntas Frequentes (FAQ)
        </Typography>
      </Box>
      <Box>
        {faqs.map((faq, index) => (
          <Accordion key={index} sx={{ mb: 2 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}a-content`}
              id={`panel${index}a-header`}
            >
              <Typography variant="h6">{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Container>
  );
};

export default FAQPage;