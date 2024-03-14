import React, { useState } from 'react';
import {
  CssBaseline,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Paper,
  Grid,
  Avatar,
  Box,
} from '@mui/material';
import { Menu, Dashboard, PersonAdd, Book, Favorite } from '@mui/icons-material';
import Sidebar from '../side-bar';
import NewUserForm from './new-user-form';
import RecentBookings from './reservations';

const AdminDashboard = ({ currentUser }) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard');

  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  const handleMenuClick = (pageName) => {
    setCurrentPage(pageName);
    setOpenSidebar(false);
  };

  const recentBookings = [
    { nomClient: 'Client 1', dateReservation: '01/09/2023' },
    { nomClient: 'Client 2', dateReservation: '02/09/2023' },
    { nomClient: 'Client 3', dateReservation: '03/09/2023' },
  ];

  const sidebarLinks = [
    { name: 'Tableau de bord', pageName: 'dashboard', icon: <Dashboard /> },
    { name: 'Nouvel utilisateur', pageName: 'newUser', icon: <PersonAdd /> },
    { name: 'Réservations', pageName: 'reservations', icon: <Book /> },
    { name: 'Liste de souhaits', pageName: 'wishlist', icon: <Favorite /> },
  ];

  return (
    <div className="container-parent">
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleSidebar}>
            <Menu />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Tableau de bord administrateur
          </Typography>
          <Box display="flex" alignItems="center">
            <Avatar src={currentUser.profileImage} alt={currentUser.prenom} />
            <Typography variant="body1" style={{ marginLeft: '8px' ,fontWeight: '600'}}>
              {currentUser.prenom}
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <Sidebar open={openSidebar} onClose={toggleSidebar} links={sidebarLinks} onMenuItemClick={handleMenuClick} />
      <main>
        {currentPage === 'dashboard' && (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper elevation={3} style={{ padding: '20px' }}>
                <Typography variant="h4">Bienvenue, {currentUser.prenom} !</Typography>
                <Typography variant="body1">C'est votre tableau de bord personnalisé</Typography>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper elevation={3} style={{ padding: '20px' }}>
                <Typography variant="h6">Statistiques</Typography>
                <ul>
                  <li>Nombre total d'utilisateurs : 100</li>
                  <li>Réservations en attente : 5</li>
                </ul>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper elevation={3} style={{ padding: '20px' }}>
                {/* Ajoutez ici d'autres informations ou graphiques */}
                <Typography variant="h6">Dernières réservations</Typography>
                <RecentBookings recentBookings={recentBookings} />
              </Paper>
            </Grid>
          </Grid>
        )}
        {currentPage === 'newUser' && <NewUserForm />}
        {currentPage === 'reservations' && <RecentBookings recentBookings={recentBookings} />}
      </main>
    </div>
  );
};

export default AdminDashboard;