import React from 'react';
import { styled } from '@mui/system';
import { BottomNavigation, BottomNavigationAction, Container, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const FooterRoot = styled('footer')({
  background: '#3498db',
  color: '#fff',
  padding: '16px',
  marginTop: 'auto',
});

const FooterContent = styled('div')({
  textAlign: 'center',
});

const Footer: React.FC = () => {
    return (
      <FooterRoot>
        <Container>
          <FooterContent>
            <Typography variant="body2">
              © 2023 Eetu Pasonen.
            </Typography>
            <Typography variant="body2">
              Sähköposti: eetu.pasonen@hotmail.com
            </Typography>
            <Typography variant="body2">
              Puh: +358 440 208 025
            </Typography>
            <BottomNavigation showLabels sx={{ background: 'transparent' }}>
              <BottomNavigationAction
                label="GitHub"
                icon={<GitHubIcon />}
                href="https://github.com/eetupas"
                target="_blank"
                rel="noopener noreferrer"
              />
              <BottomNavigationAction
                label="LinkedIn"
                icon={<LinkedInIcon />}
                href="https://www.linkedin.com/in/eetu-pasonen-246b6b2a3/"
                target="_blank"
                rel="noopener noreferrer"
              />
            </BottomNavigation>
          </FooterContent>
        </Container>
      </FooterRoot>
    );
  };

export default Footer;