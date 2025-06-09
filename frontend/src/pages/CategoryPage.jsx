import React from 'react';
import { Box, Typography, Container, CircularProgress } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useGetproductByNameQuery } from "../Redux/product"; // Ajuste o caminho se necessário
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Stack from "@mui/material/Stack";

// Este componente pode ser expandido para buscar e listar produtos da categoria específica
const CategoryPage = () => {
  const { categoryName } = useParams();
  // Lógica para buscar produtos baseados em categoryName pode ser adicionada aqui
  // Por exemplo, usando o hook useGetproductByNameQuery com um filtro de categoria

  // Exemplo de como poderia ser a query para buscar produtos por categoria:
  // const { data, error, isLoading } = useGetproductByNameQuery(`products?populate=*&filters[category][$eq]=${categoryName}`);

  // Placeholder enquanto a lógica de busca não é implementada
  // Remova ou substitua este placeholder quando a busca de produtos estiver funcionando

  // Simulação de dados para fins de exemplo
  const isLoading = false;
  const error = null;
  // const data = { data: [{ id: 1, productTitle: `Produto Exemplo ${categoryName}`, productPrice: "100", productDescription: "Descrição do produto", productImg: [{ formats: { thumbnail: { url: "/uploads/placeholder.jpg" } } }] }] };


  // Ajuste para usar uma query real quando disponível
  // A query abaixo é um exemplo e pode precisar de ajustes para corresponder à sua API Strapi
  const { data, error: productError, isLoading: productIsLoading } = useGetproductByNameQuery(
    `products?populate=*&filters[productCategory][categoryName][$eq]=${categoryName}`
  );


  if (productIsLoading) {
    return (
      <Container sx={{ py: 5, textAlign: 'center' }}>
        <CircularProgress />
        <Typography>Carregando produtos para {categoryName}...</Typography>
      </Container>
    );
  }

  if (productError) {
    return (
      <Container sx={{ py: 5, textAlign: 'center' }}>
        <Typography variant="h6" color="error">
          Ocorreu um erro ao carregar os produtos.
        </Typography>
        <Typography variant="body1">
          Por favor, tente novamente mais tarde.
        </Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ py: 5 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Categoria: {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}
        </Typography>
      </Box>

      {data && data.data && data.data.length > 0 ? (
        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          justifyContent={"space-around"}
          gap={3}
        >
          {data.data.map((item) => (
            <Card
              key={item.id}
              sx={{
                maxWidth: 333,
                mt: 2,
                mb: 2,
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <CardMedia
                sx={{ height: 200, objectFit: 'contain' }}
                image={item.attributes.productImg && item.attributes.productImg.data && item.attributes.productImg.data.length > 0
                  ? `http://localhost:1337${item.attributes.productImg.data[0].attributes.formats.thumbnail.url}`
                  : '/path/to/default-image.jpg' // Fallback image
                }
                title={item.attributes.productTitle}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {item.attributes.productTitle}
                </Typography>
                <Typography variant="subtitle1" component="p" color="primary">
                  ${item.attributes.productPrice}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1}}>
                  {item.attributes.productDescription}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Stack>
      ) : (
        <Typography sx={{ textAlign: 'center', mt: 3}}>
          Nenhum produto encontrado nesta categoria.
        </Typography>
      )}
    </Container>
  );
};

export default CategoryPage;