import { Routes, Route, BrowserRouter, Outlet, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Settings from "./pages/Settings";
import NoPage from "./pages/NoPage";
import { Provider } from "react-redux";
import { Box } from "@mui/material";
import Sidenav from "./components/SideDrawer";
import Navbar from "./components/Navbar";
import store from "./redux/store";
import Users from "./pages/Users";
import Analytics from "./pages/Analytics";
import Products from "./pages/Products";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Box sx={{ display: 'flex' }} >
            <Sidenav />
            <Box component="main" sx={{ flexGrow: 1, p: 3, }}>
              <Box sx={{ height: '64px' }} />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/users" element={<Users />} />
                <Route path="/products" element={<Products />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/about" element={<About />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/*" element={<NoPage />} />
              </Routes>
            </Box>
          </Box>

        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
