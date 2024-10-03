import { useContext, useState } from "react";
import { ColorModeContext } from "../../theme";
import {
  Box,
  Container,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import {
  DarkModeOutlined,
  ExpandMore,
  LightModeOutlined,
} from "@mui/icons-material";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

// Define um array de opções com códigos de idioma para serem usadas no select.
const options = ["BR", "EN"];

// Define um componente funcional chamado Header1
const Header1 = () => {
  
  // Usa o hook useContext para acessar o contexto de modo de cor
  const colorMode = useContext(ColorModeContext);
  // Usa o hook useTheme para acessar o tema atual
  const theme = useTheme();

  // Define dois estados locais usando o hook useState
  const [anchorEl, setAnchorEl] = useState(null); // Estado do elemento âncora do menu suspenso
  const [selectedIndex, setSelectedIndex] = useState(1); // Estado do índice selecionado

  // Determina se o menu está aberto ou fechado com base no estado do âncora
  const open = Boolean(anchorEl);

  // Define uma função para lidar com o clique na lista de itens do menu
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget); // Define o âncora para o elemento clicado
  };

  // Define uma função para lidar com o clique em um item de menu específico
  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index); // Define o índice selecionado
    setAnchorEl(null); // Fecha o menu definindo o âncora para null
  };

  // Define uma função para lidar com o fechamento do menu quando o usuário clica fora dele
  const handleClose = () => {
    setAnchorEl(null); // Define o âncora para null para fechar o menu
  };

  return (
    <Box
      sx={{
        bgcolor: "#2B3445",
        py: "4px",
        borderBottomRightRadius: 4,
        borderBottomLeftRadius: 4,
      }}
    >
      <Container>
        <Stack direction={"row"} alignItems={"center"}>
          <Typography
            sx={{
              mr: 2,
              p: "4px 10px",
              bgcolor: "#D23F57",
              borderRadius: "12px",
              fontSize: "12px",
              fontWeight: "bold",
              color: "#fff",
            }}
            variant="body2"
          >
            HOT
          </Typography>

          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: 300,
              color: "#fff",
            }}
            variant="body2"
          >
            Free Express Shipping
          </Typography>

          <Box flexGrow={1} />

          <div>
            {theme.palette.mode === "light" ? (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
                color="inherit"
              >
                <LightModeOutlined sx={{ fontSize: "16px", color: "#fff" }} />
              </IconButton>
            ) : (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
                color="inherit"
              >
                <DarkModeOutlined sx={{ fontSize: "16px" }} />
              </IconButton>
            )}
          </div>

          <List
            component="nav" //Define o tipo de elemento HTML que o componente de lista representa, neste caso, é um elemento de navegação.
            aria-label="Device settings" //Define um rótulo acessível para a lista, usado por leitores de tela para descrever o propósito da lista.
            sx={{ p: 0, m: 0 }} //Define estilos personalizados para a lista usando o sistema de estilo em linha, onde p representa padding e m representa margem, ambos definidos como zero.
          >
            <ListItem
              id="lock-button"
              aria-haspopup="listbox" //Indica que o item de lista possui um submenu ou lista associada a ele.
              aria-controls="lock-menu" //Define o ID do elemento que controla o submenu associado a este item de lista.
              aria-label="when device is locked" //Fornece uma descrição acessível para o item de lista.
              aria-expanded={open ? "true" : undefined} //Define se o submenu associado a este item de lista está expandido ou não, dependendo do estado da variável open.
              onClick={handleClickListItem} //Define uma função para ser chamada quando o item de lista é clicado.
              sx={{ "&:hover": { cursor: "pointer" }, px: 1 }} //Define estilos personalizados para o item de lista quando o mouse está sobre ele. Define também o padding horizontal.
            >
              <ListItemText
                sx={{
                  ".MuiTypography-root": { fontSize: "11px", color: "#fff" },
                }}
                secondary={options[selectedIndex]}
              />
              <ExpandMore sx={{ fontSize: "16px", color: "#fff" }} />
            </ListItem>
          </List>

          <Menu
            id="lock-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "lock-button",
              role: "listbox",
            }}
          >
            {options.map((option, index) => (
              <MenuItem
                sx={{ fontSize: "11px", p: "3px 10px", minHeight: "10px" }}
                key={option}
                selected={index === selectedIndex}
                onClick={(event) => handleMenuItemClick(event, index)}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>

          <TwitterIcon
            sx={{
              fontSize: "16px",
              color: "#fff",
            }}
          />
          <FacebookIcon
            sx={{
              fontSize: "16px",
              mx: 1,
              color: "#fff",
            }}
          />
          <InstagramIcon
            sx={{
              fontSize: "16px",
              color: "#fff",
            }}
          />
        </Stack>
      </Container>
    </Box>
  );
};

export default Header1;
