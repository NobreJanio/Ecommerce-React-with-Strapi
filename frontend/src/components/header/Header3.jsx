import {
  Box,
  Container,
  Drawer,
  IconButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import MenuIcon from "@mui/icons-material/Menu";
import WindowIcon from "@mui/icons-material/Window";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import {
  Close,
  ElectricBikeOutlined,
  LaptopChromebookOutlined,
  MenuBookOutlined,
  SportsEsportsOutlined,
} from "@mui/icons-material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Links from "./Links";
// Removido import duplicado de RouterLink, pois já foi importado acima com useNavigate

const Header3 = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const theme = useTheme();
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        mt: 5,
      }}
    >
      <Box>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{
            width: 222,
            // @ts-ignore
            bgcolor: theme.palette.myColor.main,

            color: theme.palette.text.secondary,
          }}
        >
          <WindowIcon />
          <Typography
            sx={{
              padding: "0",
              textTransform: "capitalize",
              mx: 1,
            }}
          >
            Categories
          </Typography>
          <Box flexGrow={1} />

          <KeyboardArrowRightOutlinedIcon />
        </Button>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          sx={{
            ".MuiPaper-root": {
              width: 220,
              // @ts-ignore
              bgcolor: theme.palette.myColor.main,
            },
          }}
        >
          <MenuItem component={RouterLink} to="/category/bikes" onClick={handleClose}>
            <ListItemIcon>
              <ElectricBikeOutlined fontSize="small" />
            </ListItemIcon>

            <ListItemText>Bikes</ListItemText>
          </MenuItem>

          <MenuItem component={RouterLink} to="/category/electronics" onClick={handleClose}>
            <ListItemIcon>
              <LaptopChromebookOutlined fontSize="small" />
            </ListItemIcon>

            <ListItemText>Electronics</ListItemText>
          </MenuItem>

          <MenuItem component={RouterLink} to="/category/books" onClick={handleClose}>
            <ListItemIcon>
              <MenuBookOutlined fontSize="small" />
            </ListItemIcon>

            <ListItemText>Books</ListItemText>
          </MenuItem>

          <MenuItem component={RouterLink} to="/category/games" onClick={handleClose}>
            <ListItemIcon>
              <SportsEsportsOutlined fontSize="small" />
            </ListItemIcon>

            <ListItemText>Games</ListItemText>
          </MenuItem>
        </Menu>
      </Box>

      {useMediaQuery("(min-width:1200px)") && (
        <Stack gap={4} direction={"row"} alignItems={"center"}>
          <Links title={"Home"} to="/" />
          <Links title={"Mega Menu"} to="/mega-menu" />
          <Links title={"Full Screen Menu"} to="/full-screen-menu" />
          <Links title={"Pages"} to="/pages" />
          <Links title={"User Account"} to="/user-account" />
          <Links title={"Vendor Account"} to="/vendor-account" />
        </Stack>
      )}

      {useMediaQuery("(max-width:1200px)") && (
        <IconButton onClick={toggleDrawer("top", true)}>
          <MenuIcon />
        </IconButton>
      )}

        <Drawer
        anchor={"top"}
        open={state["top"]}
        onClose={toggleDrawer("top", false)}
        sx={{
          ".MuiPaper-root.css-1sozasi-MuiPaper-root-MuiDrawer-paper": {
            height: "100%",
          },
        }}
      >
        <Box 
          sx={{ width: 444, mx: "auto", mt: 6, position: "relative", pt: 10 }}
        >
          <IconButton
            sx={{
              ":hover": { color: "red", rotate: "180deg", transition: "0.3s" },
              position: "absolute",
              top: 0,
              right: 10,
            }}
            onClick={toggleDrawer("top", false)}
          >
            <Close />
          </IconButton>

          {[
            { mainLink: "Home", subLinks: [], path: "/" },
            { mainLink: "Mega menu", subLinks: [ {name: "Dashboard", path: "/mega-menu/dashboard"}, {name:"Products", path: "/mega-menu/products"}, {name:"Orders", path: "/mega-menu/orders"}, {name:"Profile", path: "/mega-menu/profile"} ], path: "/mega-menu" },
            { mainLink: "Full screen menu", subLinks: [ {name: "Link 1", path: "/full-screen-menu/link1"}, {name: "Link 2", path: "/full-screen-menu/link2"}, {name: "Link 3", path: "/full-screen-menu/link3"} ], path: "/full-screen-menu" },
            { mainLink: "Pages", subLinks: [ {name: "Page 1", path: "/pages/page1"}, {name: "Page 2", path: "/pages/page2"} ], path: "/pages" },
            { mainLink: "User Account", subLinks: [ {name: "Login", path: "/user-account/login"}, {name: "Register", path: "/user-account/register"} ], path: "/user-account" },
            { mainLink: "Vendor Account", subLinks: [ {name: "Login", path: "/vendor-account/login"}, {name: "Register", path: "/vendor-account/register"} ], path: "/vendor-account" },
            // Adicionando os links de categoria também ao drawer, caso não estejam visíveis no menu principal
            { mainLink: "Bikes", subLinks: [], path: "/category/bikes" },
            { mainLink: "Electronics", subLinks: [], path: "/category/electronics" },
            { mainLink: "Books", subLinks: [], path: "/category/books" },
            { mainLink: "Games", subLinks: [], path: "/category/games" },
          ].map((item) => {
            return (
              <Accordion
                key={item.mainLink}
                elevation={0}
                sx={{ bgcolor: "initial" }}
              >
                <AccordionSummary
                  expandIcon={item.subLinks && item.subLinks.length > 0 ? <ExpandMoreIcon /> : null}
                  aria-controls={`panel1a-content-${item.mainLink}`}
                  id={`panel1a-header-${item.mainLink}`}
                  sx={{
                    cursor: item.subLinks && item.subLinks.length === 0 ? 'pointer' : 'default',
                    '&:hover': {
                      backgroundColor: item.subLinks && item.subLinks.length === 0 ? theme.palette.action.hover : 'initial'
                    }
                  }}
                  onClick={(e) => {
                    if (item.subLinks && item.subLinks.length === 0 && item.path) {
                      // Prevenir o comportamento padrão do AccordionSummary se for um link
                      // e não tiver sublinks, para permitir a navegação.
                      // e.stopPropagation(); // Pode ser necessário dependendo da estrutura exata
                      navigate(item.path);
                      toggleDrawer("top", false)(e); // Chama a função retornada para fechar o drawer
                    }
                  }}
                >
                  <Typography>{item.mainLink}</Typography>
                </AccordionSummary>

                {item.subLinks && item.subLinks.length > 0 && (
                  <List sx={{ py: 0, my: 0 }}>
                    {item.subLinks.map((subLink) => {
                      return (
                        <ListItem key={subLink.name} sx={{ py: 0, my: 0 }} disablePadding>
                          <ListItemButton component={RouterLink} to={subLink.path} onClick={toggleDrawer("top", false)}>
                            <ListItemText primary={subLink.name} />
                          </ListItemButton>
                        </ListItem>
                      );
                    })}
                  </List>
                )}
              </Accordion>
            );
          })}
        </Box>
      </Drawer>
    </Container>
  );
};

export default Header3;
