import "./App.css";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import ZoomIn from "@mui/icons-material/ZoomIn";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Component, Fragment } from "react";
import DashboardComponent from "./pages/dashboard/DashboardComponent";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import NoMatch from "./pages/nomatch/NoMatch";
import ProfileComponent from "./pages/profile/ProfileComponent";
import { Menu } from "@mui/icons-material";
import LoginDialog from "./components/LoginDialog";

class App extends Component {
  constructor() {
    super();
    const userDetails = localStorage.getItem("userDetails");
    this.state = {
      userDetails: null,
      isLoginDialogOpen:userDetails==null?true:false,
    };
  }
  toggleLoginDialog = () => {
    this.setState({
      ...this.state,
      isLoginDialogOpen: !this.state.isLoginDialogOpen,
    });
  };
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Box sx={{ flexGrow: 1 }}>
            <LoginDialog
              open={this.state.isLoginDialogOpen}
              toggleLoginDialog={this.toggleLoginDialog}
            />
            <AppBar position='static'>
              <Toolbar>
                <IconButton
                  size='large'
                  edge='start'
                  color='inherit'
                  aria-label='menu'
                  sx={{ mr: 2 }}
                >
                  <ZoomIn />
                </IconButton>
                <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                  CRM
                </Typography>
                <Button color='inherit' onClick={this.toggleLoginDialog}>
                  Login
                </Button>
              </Toolbar>
            </AppBar>
          </Box>
          <Container
            maxWidth='false'
            style={{ padding: "0px", height: "100vh" }}
          >
            <Grid container>
              <Grid xs={2} style={{ backgroundColor: "red", color: "white" }}>
                <Link to='/'>
                  <ListItemButton>
                    <ListItemIcon sx={{ color: "inherit" }}>
                      <Menu />
                    </ListItemIcon>
                    <ListItemText
                      primary='Dashboard'
                      primaryTypographyProps={{
                        fontSize: 14,
                        fontWeight: "medium",
                      }}
                    />
                  </ListItemButton>
                </Link>
                <Link to='/profile'>
                  <ListItemButton>
                    <ListItemIcon sx={{ color: "inherit" }}>
                      <Menu />
                    </ListItemIcon>
                    <ListItemText
                      primary='Profile'
                      primaryTypographyProps={{
                        fontSize: 14,
                        fontWeight: "medium",
                      }}
                    />
                  </ListItemButton>
                </Link>
                <Link to='/messages'>
                  <ListItemButton>
                    <ListItemIcon sx={{ color: "inherit" }}>
                      <Menu />
                    </ListItemIcon>
                    <ListItemText
                      primary='Messages'
                      primaryTypographyProps={{
                        fontSize: 14,
                        fontWeight: "medium",
                      }}
                    />
                  </ListItemButton>
                </Link>
              </Grid>
              <Grid xs={10} style={{ padding: "10px" }}>
                <Routes>
                  <Route path='/' element={<DashboardComponent />} />
                  <Route path='/profile' element={<ProfileComponent />} />
                  <Route path='*' element={<NoMatch />} />
                </Routes>
              </Grid>
            </Grid>
          </Container>
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;
