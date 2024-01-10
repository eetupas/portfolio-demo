import './App.css';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ThemeProvider } from '@mui/material/styles';
import Theme from './Theme'; // Import your custom theme
import { Grid } from '@mui/material';
import Helmet from 'react-helmet-async';

function App() {
  return (
    <ThemeProvider theme={Theme}>
    <div className="App" style={{background: 'linear-gradient(to right bottom, #FCEDDA, #BEBFEF)'}}>
      <Navbar/>
      <Grid container spacing={13} sx={{marginBottom: 15, marginTop: 1}}>
        <Grid item xs={12}>
          <div id="profile">
            <Profile/>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div id="projects">
            <Projects/>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div id="skills">
            <Skills/>
          </div>
        </Grid>
      </Grid>
      <div id="contacts">
      <Footer/>
      </div>
    </div>
    </ThemeProvider>
  );
}

export default App;
