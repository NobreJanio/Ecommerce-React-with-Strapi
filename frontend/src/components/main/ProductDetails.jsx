// @ts-nocheck
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { AddShoppingCartOutlined } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useState } from "react";

const ProductDetails = ({ clickedProduct }) => {
  const [selectedImg, setselectedImg] = useState(0);
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
          src={
            clickedProduct.productImg.formats.thumbnail.url
          }
          alt=""
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
            {/* Certifique-se de que `productImg.data` existe e tem itens */}
            {clickedProduct?.productImg?.data?.length > 0 ? (
              clickedProduct.productImg.data.map((item, index) => {
                return (
                  <ToggleButton
                    key={item.id}
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
                      src={item.formats?.thumbnail?.url || item.formats?.small?.url}
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
        >
          <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />
          Buy now
        </Button>
      </Box>
    </Box>
  );
};


export default ProductDetails;
