import React, {useContext} from 'react';
import {useHistory} from 'react-router-dom';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MoreIcon from '@material-ui/icons/MoreVert';
import logo from '../../assets/images/fav_logo1.jpg';
import './Navbar.css';
import LoginContext from '../../util/Contexts/LoginContext';
import {useCartContext} from '../../util/Store.js'

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: '#3d4a5d',
    backgroundImage: 'linearGradient(to right, #121212, #3d4a5d)'
  },  
  grow: {
    flexGrow: 1,
  },
  height: {
    minHeight: '50px',
    paddingBottom: '13px'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const [state, dispatch] = useCartContext();
  const history = useHistory();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const {loggedIn} = useContext(LoginContext);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuProfileClose = () => {
    setAnchorEl(null);
    loggedIn ? history.push("/profile"): history.push("/login")
    handleMobileMenuClose();
  };

  const handleMenuOrderClose = () => {
    setAnchorEl(null);
    loggedIn ? history.push("/order"): history.push("/login")
    handleMobileMenuClose();
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const loadCart = (event) => {
    event.preventDefault();
    history.push("/cart");
  }

  const loadProduct = (event) => {
    event.preventDefault();
    history.push("/product");
  }

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {loggedIn ? 
      <MenuItem onClick={handleMenuProfileClose} >Profile</MenuItem> : <MenuItem onClick={handleMenuProfileClose} >Login</MenuItem> }
      {loggedIn ? 
      <MenuItem onClick={handleMenuOrderClose}>Order History</MenuItem> : null }
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
          href="/login"
        >
          <AccountCircleIcon />
        </IconButton>
        {loggedIn ? 
        (<p use="button" href="/profile">Profile</p>) : (<p use="button" href="/login">Login</p>) 
        }
        {loggedIn ? 
        (<p use="button" href="/order">Order History</p>) : null 
        }
      </MenuItem>
      <MenuItem >
        <IconButton  onClick={loadCart} color="inherit" >
          <Badge badgeContent={state.count} color="secondary" >
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <p>Cart</p>
      </MenuItem> 
    </Menu>
  );

  return (
    <div className={`${classes.grow} ${classes.height}`}>
    
        <AppBar position="static" className={classes.header}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={loadProduct}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
          <Badge badgeContent={4} color="secondary">
            <a href="/"><img src={logo} alt="logo" className={"App-Nav-Logo"}/></a>
          </Badge>  
          </Typography>
          <div className={classes.grow} />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
           </div>
           <div className={classes.grow} />
           <div className={classes.sectionDesktop}>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircleIcon />
            </IconButton>
            <IconButton color="inherit"
              onClick={loadCart}
            >
              <Badge   badgeContent={state.count} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}


