import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { InputBase, styled } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { Colors, DrawerWidth } from '../styles/theme';
import SearchIcon from '@mui/icons-material/Search';



const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      width: `calc(100% - ${DrawerWidth}px)`,
      marginLeft: `${DrawerWidth}px`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

  const Search = styled('div')(({ open }) => ({
    position: 'relative',
    borderRadius: 10,
    backgroundColor: Colors.white,
    '&:hover': {
      backgroundColor: `1px solid ${Colors.light} `,
    },
    marginLeft: open ? 0 : 10,
    width: '100%',
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    fontSize: '1.25rem',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));


export default function Appbar ({open, handleDrawerOpen})  {

    return (
        <AppBar position="fixed" elevation={0} open={open}>
        <Toolbar>
          <IconButton
            color={Colors.black}
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
        {!open && <Typography overflow={'visible'} variant="h6" noWrap component="div" color={Colors.black} fontWeight={'bold'}>
       Admin Dashboard
          </Typography>}
          <Search open={open}>
            <SearchIconWrapper>
              <SearchIcon sx={{color: Colors.light}}/>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    )
  }