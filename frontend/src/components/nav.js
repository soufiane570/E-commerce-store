import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import Logo from '../assets/logo.png';

const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    const drawerList = () => (
        <Box
            sx={{ width: '95%' }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <Box display="flex" justifyContent="flex-end">
                <IconButton onClick={toggleDrawer(false)}>
                    <CloseIcon />
                </IconButton>
            </Box>
            <List>
            <>
                            <Button color="inherit">Sign in</Button>
                            <Button color="inherit">FAQs</Button>
                            <Button
                                color="inherit"
                                onClick={handleMenuClick}
                            >
                                USD
                            </Button>
                            <Menu
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleMenuClose}
                            >
                                <MenuItem onClick={handleMenuClose}>USD</MenuItem>
                                <MenuItem onClick={handleMenuClose}>EUR</MenuItem>
                                <MenuItem onClick={handleMenuClose}>GBP</MenuItem>
                            </Menu>
                        </>
                {/* <ListItem>
                    <img src={Logo} alt="Logo" style={{ height: '50px', margin: '0 auto' }} />
                </ListItem> */}
                <ListItem button>
                    <ListItemText primary="Home" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Shop" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Pages" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Blog" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Contacts" />
                </ListItem>
                <Divider />
                <ListItem>
                    <Typography variant="body2">Free shipping, 30-day return or refund guarantee.</Typography>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <AppBar position="static"  style={{ backgroundColor: isMobile ? '#fff' : '#000' }}>
            <Toolbar style={{ justifyContent: 'space-around' }}>
                {!isMobile && (
                    <Typography variant="body2" style={{ flexGrow: 1 }}>
                        Free shipping, 30-day return or refund guarantee.
                    </Typography>
                )}
                <Box display="flex" alignItems="center">
                    {!isMobile && (
                        <>
                            <Button color="inherit">Sign in</Button>
                            <Button color="inherit">FAQs</Button>
                            <Button
                                color="inherit"
                                onClick={handleMenuClick}
                            >
                                USD
                            </Button>
                            <Menu
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleMenuClose}
                            >
                                <MenuItem onClick={handleMenuClose}>USD</MenuItem>
                                <MenuItem onClick={handleMenuClose}>EUR</MenuItem>
                                <MenuItem onClick={handleMenuClose}>GBP</MenuItem>
                            </Menu>
                        </>
                    )}
                    {isMobile && (
                        <Box display="flex" alignItems="center" justifyContent='space-between' width="100%" bgcolor="white">
                            <IconButton color="#000" onClick={toggleDrawer(true)}>
                                <MenuIcon />
                            </IconButton>
                            <img src={Logo} alt="Logo" style={{ height: '40px', marginRight: '16px' }} />
                        </Box>
                    )}
                </Box>
            </Toolbar>
            {!isMobile && (
                <Toolbar style={{ justifyContent: 'space-between', backgroundColor: '#fff', color: '#000' }}>
                    <Box display="flex" alignItems="center">
                        <img src={Logo} alt="Logo" style={{ height: '40px' }} />
                    </Box>
                    <Box display="flex" alignItems="center" flexGrow={1} justifyContent="center">
                        <Button color="inherit" style={{ margin: '0 15px' }}>Home</Button>
                        <Button color="inherit" style={{ margin: '0 15px' }}>Shop</Button>
                        <Button color="inherit" style={{ margin: '0 15px' }}>Pages</Button>
                        <Button color="inherit" style={{ margin: '0 15px' }}>Blog</Button>
                        <Button color="inherit" style={{ margin: '0 15px' }}>Contacts</Button>
                    </Box>
                    <Box display="flex" alignItems="center">
                        <IconButton color="inherit">
                            <SearchIcon />
                        </IconButton>
                        <IconButton color="inherit">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton color="inherit">
                            <ShoppingCartIcon />
                            <Box component="span" sx={{ position: 'absolute', top: '-10px', right: '-10px', backgroundColor: '#e53637', color: '#fff', borderRadius: '50%', padding: '2px 6px', fontSize: '12px' }}>
                                0
                            </Box>
                        </IconButton>
                        <Typography variant="body1" style={{ marginLeft: '20px' }}>$0.00</Typography>
                    </Box>
                </Toolbar>
            )}
            <Drawer anchor='left' open={drawerOpen} onClose={toggleDrawer(false)}>
                {drawerList()}
            </Drawer>
        </AppBar>
    );
};

export default Header;
