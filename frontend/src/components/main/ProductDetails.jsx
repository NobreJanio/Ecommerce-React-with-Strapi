// @ts-nocheck
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { AddShoppingCartOutlined } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../Redux/cartSlice";

const ProductDetails = ({ clickedProduct }) => {
  const [selectedImg, setselectedImg] = useState(0);
  const dispatch = useDispatch();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2.5,
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      <Box sx={{ display: "flex" }}>
        <img
          height={400}
          width={360}
          src={(() => {
            let img = clickedProduct.productImg;
            let url = '';
            if (Array.isArray(img) && img.length > 0) {
              url = img[selectedImg]?.formats?.thumbnail?.url || img[selectedImg]?.formats?.small?.url;
            } else if (img?.formats?.thumbnail?.url) {
              url = img.formats.thumbnail.url;
            } else if (img?.formats?.small?.url) {
              url = img.formats.small.url;
            }
            if (url && url.startsWith('/uploads')) {
              return `http://localhost:1337${url}`;
            }
            return url || "https://via.placeholder.com/360x400?text=Sem+imagem";
          })()}
          alt="Imagem do produto"
        />
      </Box>

      <Box sx={{ py: 2, textAlign: { xs: "center", sm: "left" } }}>
        <Typography variant="h5">
          {clickedProduct.productTitle}
        </Typography>
        <Typography my={0.4} fontSize={"22px"} color={"crimson"} variant="h6">
          ${clickedProduct.productPrice}
        </Typography>
        <Typography variant="body1">
          {clickedProduct.productDescription}
        </Typography>

        <Stack
          sx={{ justifyContent: { xs: "center", sm: "left" } }}
          direction={"row"}
          gap={1}
          my={2}
        >
          <ToggleButtonGroup
            value={selectedImg}
            exclusive
            sx={{
              ".Mui-selected": {
                border: "1px solid royalblue !important",
                backgroundColor: "initial",
                borderRadius: "5px !important",
                opacity: "1",
              },
            }}
          >
            {/* Agora percorre productImg diretamente */}
            {Array.isArray(clickedProduct?.productImg) && clickedProduct.productImg.length > 0 ? (
              clickedProduct.productImg.map((item, index) => {
                return (
                  <ToggleButton
                    key={item.id || index}
                    value={index}
                    sx={{
                      width: "110px",
                      height: "110px",
                      mx: 1,
                      p: "0",
                      opacity: "0.5",
                    }}
                  >
                    <img
                      onClick={() => {
                        setselectedImg(index);
                      }}
                      style={{
                        cursor: "pointer",
                      }}
                      height={"100%"}
                      width={"100%"}
                      src={(() => {
                        let url = item.formats?.thumbnail?.url || item.formats?.small?.url;
                        if (url && url.startsWith('/uploads')) {
                          return `http://localhost:1337${url}`;
                        }
                        return url || '';
                      })()}
                      alt=""
                    />
                  </ToggleButton>
                );
              })
            ) : (
              <p>No images available</p>
            )}
          </ToggleButtonGroup>
        </Stack>

        <Button
          sx={{ mb: { xs: 1, sm: 0 }, textTransform: "capitalize" }}
          variant="contained"
          onClick={() => {
            dispatch(addItemToCart({
              id: clickedProduct.id,
              name: clickedProduct.productTitle,
              price: clickedProduct.productPrice,
              image: (() => {
                let img = clickedProduct.productImg;
                let url = '';
                if (Array.isArray(img) && img.length > 0) {
                  url = img[selectedImg]?.formats?.thumbnail?.url || img[selectedImg]?.formats?.small?.url;
                } else if (img?.formats?.thumbnail?.url) {
                  url = img.formats.thumbnail.url;
                } else if (img?.formats?.small?.url) {
                  url = img.formats.small.url;
                }
                if (url && url.startsWith('/uploads')) {
                  return `http://localhost:1337${url}`;
                }
                return url || "https://via.placeholder.com/360x400?text=Sem+imagem";
              })()
            }));
          }}
        >
          <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />
          Buy now
        </Button>
      </Box>
    </Box>
  );
};


export default ProductDetails;
