import { ExpandMore, KeyboardArrowRightOutlined } from "@mui/icons-material";
import { Box, Paper, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Link as RouterLink } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Links = ({ title, to = "#" }) => {
  // Se o título for 'Mega Menu' ou 'Full Screen Menu' ou 'Pages', renderiza o menu dropdown complexo
  // Caso contrário, renderiza um link simples
  if (title === "Mega Menu" || title === "Full Screen Menu" || title === "Pages") {
    return (
      <Box
        //className="border"
        sx={{
          ":hover .show-when-hover": { display: "block" },
          ":hover": { cursor: "pointer" },
          position: "relative",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography variant="body1">{title}</Typography>
        <ExpandMore sx={{ fontSize: "16px", ml: 1 }} />
        {/* O restante do código do menu dropdown complexo permanece aqui */}
        <Box
          className=" show-when-hover"
          sx={{
            position: "absolute",
            top: "100%",
            minWidth: "170px",
            left: "50%",
            transform: " translateX(-50%)",
            display: "none",
            zIndex: 2
          }}
        >
          <Paper sx={{ mt: 1,  }} className=" ">
            <nav aria-label="secondary mailbox folders">
              <List>
                <ListItem disablePadding>
                  <ListItemButton component={RouterLink} to={`${to}/dashboard`} sx={{ display: "flex", p: 0, px: 1.5 }}>
                    <ListItemText sx={{ "& .MuiTypography-root": { fontSize: "15px", fontWeight: 300 } }} primary="Dashboard" />
                  </ListItemButton>
                </ListItem>

                <ListItem
                  sx={{ ":hover .sub-link": { display: "block" }, position: "relative" }}
                  disablePadding
                >
                  <ListItemButton sx={{ display: "flex", p: 0, px: 1.5 }}>
                    <ListItemText sx={{ "& .MuiTypography-root": { fontSize: "15px", fontWeight: 300 } }} primary="Products" />
                    <Box flexGrow={1} />
                    <KeyboardArrowRightOutlined fontSize="small" />
                  </ListItemButton>
                  <Box className=" sub-link" sx={{ display: "none", position: "absolute", top: 0, left: "100%" }}>
                    <Paper sx={{ ml: 1, minWidth: 150 }}>
                      <nav aria-label="secondary mailbox folders">
                        <List>
                          <ListItem disablePadding>
                            <ListItemButton component={RouterLink} to={`${to}/products/add`} sx={{ display: "flex", p: 0, px: 1.5 }}>
                              <ListItemText sx={{ "& .MuiTypography-root": { fontSize: "15px", fontWeight: 300 } }} primary="Add Product" />
                            </ListItemButton>
                          </ListItem>
                          <ListItem disablePadding>
                            <ListItemButton component={RouterLink} to={`${to}/products/edit`} sx={{ display: "flex", p: 0, px: 1.5 }}>
                              <ListItemText sx={{ "& .MuiTypography-root": { fontSize: "15px", fontWeight: 300 } }} primary="Edit Product" />
                            </ListItemButton>
                          </ListItem>
                        </List>
                      </nav>
                    </Paper>
                  </Box>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemButton component={RouterLink} to={`${to}/orders`} sx={{ display: "flex", p: 0, px: 1.5 }}>
                    <ListItemText sx={{ "& .MuiTypography-root": { fontSize: "15px", fontWeight: 300 } }} primary="Orders" />
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemButton component={RouterLink} to={`${to}/profile`} sx={{ display: "flex", p: 0, px: 1.5 }}>
                    <ListItemText sx={{ "& .MuiTypography-root": { fontSize: "15px", fontWeight: 300 } }} primary="Profile" />
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
          </Paper>
        </Box>
      </Box>
    );
  }

  // Para outros links como Home, User Account, Vendor Account, renderiza um link simples
  return (
    <RouterLink to={to} style={{ textDecoration: 'none', color: 'inherit' }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          // Adicione padding ou margin se necessário para espaçamento
        }}
      >
        <Typography variant="body1">{title}</Typography>
        {/* Não mostrar ExpandMore para links simples */}
      </Box>
    </RouterLink>
  );
};

export default Links;