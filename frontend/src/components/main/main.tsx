import {
  Box,
  Button,
  Container,
  Dialog,
  IconButton,
  Rating,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { Close } from "@mui/icons-material";
import ProductDetails from "./ProductDetails";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: number;
}

const products: Product[] = [
  {
    id: 1,
    title: "Women's Fashion Dress",
    description: "Elegant fashion dress perfect for any occasion",
    price: 89.99,
    category: "women",
    image: "src/images/1.jpg",
    rating: 4.5
  },
  {
    id: 2,
    title: "Men's Casual Shirt",
    description: "Comfortable and stylish casual shirt for men",
    price: 49.99,
    category: "men",
    image: "src/images/2.jpg",
    rating: 4.2
  },
  {
    id: 3,
    title: "Women's Summer Blouse",
    description: "Light and breezy summer blouse",
    price: 39.99,
    category: "women",
    image: "src/images/1.jpg",
    rating: 4.0
  },
  {
    id: 4,
    title: "Men's Formal Suit",
    description: "Classic formal suit for professional occasions",
    price: 299.99,
    category: "men",
    image: "src/images/2.jpg",
    rating: 4.8
  }
];

const Main: React.FC = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [category, setCategory] = useState<string>("all");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleClickOpen = (product: Product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProduct(null);
  };

  const handleAlignment = (event: React.MouseEvent<HTMLElement>, newValue: string | null) => {
    if (newValue !== null) {
      setCategory(newValue);
    }
  };

  const filteredProducts = products.filter(product => {
    if (category === "all") return true;
    return product.category === category.toLowerCase();
  });

  return (
    <Container sx={{ py: 9 }}>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
        gap={3}
      >
        <Box>
          <Typography variant="h6">Selected Products</Typography>
          <Typography fontWeight={300} variant="body1">
            All our new arrivals in a exclusive brand selection
          </Typography>
        </Box>

        <ToggleButtonGroup
          color="error"
          value={category}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
          sx={{
            ".Mui-selected": {
              border: "1px solid rgba(233, 69, 96, 0.5) !important",
              color: "#e94560",
              backgroundColor: "initial",
            },
          }}
        >
          <ToggleButton
            sx={{ color: theme.palette.text.primary }}
            className="myButton"
            value="all"
            aria-label="all products"
          >
            All Products
          </ToggleButton>

          <ToggleButton
            sx={{ mx: "16px !important", color: theme.palette.text.primary }}
            className="myButton"
            value="men"
            aria-label="men products"
          >
            MEN
          </ToggleButton>

          <ToggleButton
            sx={{ color: theme.palette.text.primary }}
            className="myButton"
            value="women"
            aria-label="women products"
          >
            WOMEN
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>

      <Stack
        direction={"row"}
        flexWrap={"wrap"}
        justifyContent={"space-between"}
      >
        {filteredProducts.map((item) => {
          return (
            <Card
              key={item.id}
              sx={{
                maxWidth: 333,
                mt: 6,
                ":hover .MuiCardMedia-root ": {
                  rotate: "1deg",
                  scale: "1.1",
                  transition: "0.35s",
                },
              }}
            >
              <CardMedia
                sx={{ height: 277 }}
                image={item.image}
                title={item.title}
              />

              <CardContent>
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Typography gutterBottom variant="h6" component="div">
                    {item.title}
                  </Typography>

                  <Typography variant="subtitle1" component="p">
                    ${item.price}
                  </Typography>
                </Stack>

                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>

              <CardActions sx={{ justifyContent: "space-between" }}>
                <Button
                  onClick={() => handleClickOpen(item)}
                  sx={{ textTransform: "capitalize" }}
                  size="large"
                >
                  <AddShoppingCartOutlinedIcon
                    sx={{ mr: 1 }}
                    fontSize="small"
                  />
                  add to cart
                </Button>
                <Rating
                  precision={0.1}
                  name="read-only"
                  value={item.rating}
                  readOnly
                />
              </CardActions>
            </Card>
          );
        })}
      </Stack>

      <Dialog
        sx={{ ".MuiPaper-root": { minWidth: { xs: "100%", md: 800 } } }}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <IconButton
          sx={{
            ":hover": { color: "red", rotate: "180deg", transition: "0.3s" },
            position: "absolute",
            top: 0,
            right: 10,
          }}
          onClick={handleClose}
        >
          <Close />
        </IconButton>

        <ProductDetails product={selectedProduct} />
      </Dialog>
    </Container>
  );
};

export default Main;

