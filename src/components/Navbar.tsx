import React, { useState } from 'react';
import {
  AppBar,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
  Button,
  useMediaQuery,
  Theme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-scroll';

const Navbar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setDrawerOpen(open);
  };

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" component="div">
            Eetu Pasonen
          </Typography>
          {isMobile ? (
            // Burger menu button
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
          ) : (
            // Default navigation
            <div>
              <Button color="inherit">
                <Link to="profile" smooth={true} duration={500} offset={-120}>
                  Profiili
                </Link>
              </Button>
              <Button color="inherit">
                <Link to="projects" smooth={true} duration={500} offset={-150}>
                  Projektit
                </Link>
              </Button>
              <Button color="inherit">
                <Link to="skills" smooth={true} duration={500} offset={-150}>
                  Osaaminen
                </Link>
              </Button>
              <Button color="inherit">
                <Link to="contacts" smooth={true} duration={500} offset={0}>
                  Yhteystiedot
                </Link>
              </Button>
              {/* Add more navigation items as needed */}
            </div>
          )}

          {/* Burger menu */}
          <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
            <List>
              <ListItem button onClick={() => setDrawerOpen(false)}>
                <ListItemText>
                  <Button color="inherit">
                    <Link to="profile" smooth={true} duration={500} offset={-120}>
                      Profiili
                    </Link>
                  </Button>
                </ListItemText>
              </ListItem>
              <ListItem button onClick={() => setDrawerOpen(false)}>
                <ListItemText>
                  <Button color="inherit">
                    <Link to="projects" smooth={true} duration={500} offset={-150}>
                      Projektit
                    </Link>
                  </Button>
                </ListItemText>
              </ListItem>
              <ListItem button onClick={() => setDrawerOpen(false)}>
                <ListItemText>
                  <Button color="inherit">
                    <Link to="skills" smooth={true} duration={500} offset={-150}>
                      Osaaminen
                    </Link>
                  </Button>
                </ListItemText>
              </ListItem>
              <ListItem button onClick={() => setDrawerOpen(false)}>
                <ListItemText>
                  <Button color="inherit">
                    <Link to="contacts" smooth={true} duration={500} offset={0}>
                      Yhteystiedot
                    </Link>
                  </Button>
                </ListItemText>
              </ListItem>
              {/* Add more navigation items as needed */}
            </List>
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;