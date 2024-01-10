import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';

const Profile = () => {
  return (
    <Container maxWidth="xl" sx={{ marginTop: 4 }}>
      <Box>
        <Grid container spacing={9.5}>
          {/* Image Section */}
          <Grid item xs={12} md={4}>
            <img
              src="https://users.metropolia.fi/~eetupas/portfolioimages/IMG-20231208-WA0001.jpg"  // Replace with your image URL
              alt="Profile"
              style={{ width: '100%', borderRadius: '1%' }}
            />
          </Grid>

          {/* About Me Section */}
          <Grid item xs={12} md={8}>
            <Typography variant="h1" gutterBottom sx={{ textAlign: 'left'}}>
              Eetu Pasonen
            </Typography>
            <Typography variant="body1" sx={{textAlign: 'left'}}>
            Neljännen vuoden mediatekniikan opiskelijana olen ratkaisukeskeinen ja sisukas. Olen hankkinut
            monipuolista koodausosaamista erilaisista projekteista, joissa olen hyödyntänyt eri teknologioita ja  
            koodikieliä. Samalla olen kehittänyt tiimityöskentely- ja kommunikaatiotaitojani. Tavoitteenani on
            laajentaa ja soveltaa teknistä osaamistani tuottaakseni luovia ja käyttäjäystävällisiä ratkaisuja.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Profile;