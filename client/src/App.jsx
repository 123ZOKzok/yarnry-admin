import { ThemeProvider } from "@mui/material"
import AdminApp from "./components/AdminApp"
import theme from './styles/theme'
// import Dashboard from "./components/Dashboard"
// import Products from "./components/Products"
// import Settings from "./components/Settings"



function App() {
 

  return (
    <ThemeProvider theme={theme}>
     <AdminApp />
     {/* <Dashboard />
     <Products />
     <Settings /> */}
    </ThemeProvider>
  )
}

export default App
