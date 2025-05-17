import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeItemFromCart, updateItemQuantity } from '../../Redux/cartSlice';


import {
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    Container,
    Divider,
    IconButton,
    Stack,
    Typography,
    Paper
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const Cart = () => {
    const dispatch = useDispatch();
    // @ts-ignore
    const { items, totalPrice } = useSelector(state => state.cart);

    const handleRemoveItem = (itemId) => {
        dispatch(removeItemFromCart(itemId));
    };

    const handleUpdateQuantity = (itemId, newQuantity) => {
        if (newQuantity > 0) {
            dispatch(updateItemQuantity({ id: itemId, quantity: newQuantity }));
        } else {
            dispatch(removeItemFromCart(itemId));
        }
    };

    if (items.length === 0) {
        return (
            <Container maxWidth="md" sx={{ py: 8 }}>
                <Paper elevation={3} sx={{ p: 6, textAlign: 'center', borderRadius: 4 }}>
                    <Typography variant="h5" color="text.secondary" fontWeight={500}>
                        Seu carrinho está vazio.
                    </Typography>
                </Paper>
            </Container>
        );
    }

    return (
        <Container maxWidth="md" sx={{ py: 6 }}>
            <Paper elevation={4} sx={{ borderRadius: 4, p: { xs: 2, sm: 4 }, bgcolor: 'background.default' }}>
                <Typography variant="h4" align="center" fontWeight={800} color="#2B3445" mb={4}>
                    Carrinho de compras
                </Typography>
                <Stack spacing={3}>
                    {items.map((item) => (
                        <Card key={item.id} elevation={2} sx={{ display: 'flex', alignItems: 'center', p: 2, borderRadius: 3, position: 'relative', bgcolor: '#fff' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
                                <CheckBoxIcon color="primary" sx={{ fontSize: 28 }} />
                            </Box>
                            <CardMedia
                                component="img"
                                image={item.image || ''}
                                alt={item.name}
                                sx={{ width: 90, height: 90, objectFit: 'contain', bgcolor: '#f5f5f5', borderRadius: 2, border: '1px solid #eee', mr: 2 }}
                            />
                            <CardContent sx={{ flex: 1, minWidth: 0, p: 0 }}>
                                <Stack direction={{ xs: 'column', sm: 'row' }} alignItems={{ sm: 'center' }} justifyContent="space-between" spacing={1}>
                                    <Typography variant="h6" fontWeight={600} color="text.primary" noWrap title={item.name}>
                                        {item.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        ID: {item.id}
                                    </Typography>
                                </Stack>
                                <Stack direction="row" spacing={2} alignItems="center" mt={1}>
                                    <Typography variant="caption" color="primary.main">
                                        Vendido por: Loja Exemplo
                                    </Typography>
                                    <Typography variant="caption" color="success.main">
                                        Em estoque
                                    </Typography>
                                </Stack>
                                <Stack direction="row" spacing={2} alignItems="center" mt={1}>
                                    <Typography variant="caption" color="text.secondary">
                                        Opções de presente indisponíveis.
                                    </Typography>
                                    <Typography component="a" href="#" variant="caption" color="primary" sx={{ textDecoration: 'underline', cursor: 'pointer' }}>
                                        Saiba mais
                                    </Typography>
                                </Stack>
                                <Stack direction="row" spacing={2} alignItems="center" mt={2}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', border: '1px solid #e0e0e0', borderRadius: 2, px: 1, bgcolor: '#fafafa' }}>
                                        <IconButton size="small" color="primary" onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}>
                                            <RemoveIcon />
                                        </IconButton>
                                        <Typography variant="body1" fontWeight={600} sx={{ mx: 1, minWidth: 24, textAlign: 'center' }}>
                                            {item.quantity}
                                        </Typography>
                                        <IconButton size="small" color="primary" onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}>
                                            <AddIcon />
                                        </IconButton>
                                    </Box>
                                    <Button
                                        variant="outlined"
                                        color="error"
                                        size="small"
                                        startIcon={<DeleteIcon />}
                                        onClick={() => handleRemoveItem(item.id)}
                                        sx={{ fontWeight: 700, borderRadius: 2 }}
                                    >
                                        Excluir
                                    </Button>
                                    <Button variant="text" color="primary" size="small" sx={{ textTransform: 'none' }}>
                                        Salvar para mais tarde
                                    </Button>
                                    <Button variant="text" color="primary" size="small" sx={{ textTransform: 'none' }}>
                                        Compartilhar
                                    </Button>
                                </Stack>
                            </CardContent>
                            <Divider orientation="vertical" flexItem sx={{ mx: 2, display: { xs: 'none', md: 'block' } }} />
                            <Stack alignItems="flex-end" minWidth={120} ml={2}>
                                <Typography variant="h6" fontWeight={800} color="text.primary">
                                    R$ {item.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                                </Typography>
                                <Typography variant="caption" color="primary.main" mt={0.5}>
                                    ou em até 12x de R$ {(item.price / 12).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                                </Typography>
                            </Stack>
                        </Card>
                    ))}
                </Stack>
                <Box sx={{ mt: 6, p: 4, borderTop: '4px solid #1976d2', bgcolor: '#e3f2fd', borderRadius: 3, boxShadow: 2, display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center', justifyContent: 'space-between' }}>
                    <Stack spacing={1} alignItems={{ xs: 'center', sm: 'flex-start' }}>
                        <Typography variant="subtitle1" fontWeight={700} color="primary.dark">
                            Subtotal ({items.length} produto{items.length > 1 ? 's' : ''}):
                        </Typography>
                        <Typography variant="h4" fontWeight={900} color="#2B3445">
                            R$ {totalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                        </Typography>
                    </Stack>
                    <Link to="/checkout" style={{ width: '100%', maxWidth: 260, marginTop: 16, textDecoration: 'none' }}>
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            fullWidth
                            sx={{ borderRadius: 3, fontWeight: 700, py: 2, fontSize: 18, boxShadow: 3, textTransform: 'none' }}
                        >
                            Finalizar Compra
                        </Button>
                    </Link>
                </Box>
            </Paper>
        </Container>
    );
};

export default Cart;