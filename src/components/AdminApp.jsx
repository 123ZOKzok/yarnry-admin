import { Router } from "react-router-dom";
import { Colors } from "../styles/theme";
import { Box, styled } from "@mui/material";
import AppRoutes from "../Routes";
import { useState } from "react";



const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: `-${DrawerWidth}px`,
      ...(open && {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      }),
    }),
  );


export default function AdminApp ()  {
    const [open, setOpen] = useState (true);
  return (
    <Box sx={{
        display: 'flex',
        background: Colors.background,
        height: '100vh'
    }}>
        <Router>
        <Main open={open}>
            <AppRoutes />
        </Main>
        </Router>
       
        </Box>
  )
}