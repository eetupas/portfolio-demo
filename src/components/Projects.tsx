import React from 'react';
import Slider from 'react-slick';
import { Card, CardContent, CardMedia, Typography, Container, IconButton, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const projectData = [
  {
    title: 'Webweave',
    description: 'Ai kotisivukone',
    imageUrl: 'https://users.metropolia.fi/~eetupas/portfolioimages/webweavesmalllogo.png',
    githubRepo: 'https://github.com/ofisch/WebWeave', 
    websiteUrl: 'https://www.webweave.fi',  
  },
  {
    title: 'Riffsurf',
    description: 'Rytmipeli',
    imageUrl: 'https://users.metropolia.fi/~eetupas/portfolioimages/Riffsurflogo.JPG',
    websiteUrl: 'https://ofisch.itch.io/riffsurf',
  },
  {
    title: 'Activout',
    description: 'Ulkoilu paikkojen etsimis ja arviointi sivusto.',
    imageUrl: 'https://users.metropolia.fi/~eetupas/portfolioimages/activoutlogo.png',
    githubRepo: 'https://github.com/ofisch/activout',
    websiteUrl: 'https://users.metropolia.fi/~lassiaa/react-projekti/',
  },
  {
    title: 'MetropoliaCine',
    description: 'Elokuvafestivaali sivusto.',
    githubRepo: 'https://github.com/ofisch/metropoliaCine',
  },
  {
    title: 'Signage-sivu',
    description: 'Signage sivu koulu kampukselle.',
    githubRepo: 'https://github.com/Lassiaa/metropolia-signage-projekti',
    websiteUrl: 'https://users.metropolia.fi/~onnif/metropolia-signage-sivu/src/',
  },
];


const Projects: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Container maxWidth="xl">
      <Slider {...settings}>
        {projectData.map((project, index) => (
          <div key={index}>
            <Card>
              {project.imageUrl ? (
                <CardMedia
                  component="img"
                  height="200"
                  image={project.imageUrl}
                  alt={project.title}
                />
              ) : (
                <div
                  style={{
                    height: 200,
                    background: 'linear-gradient(to right, #70F8BA, #D264B6)',
                  }}
                />
              )}
              <CardContent>
                <Typography variant="h6" component="div">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
                {project.githubRepo && (
                  <IconButton
                    color="primary"
                    component={Link}
                    href={project.githubRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHubIcon />
                  </IconButton>
                )}
                {project.websiteUrl && (
                  <IconButton
                    color="primary"
                    component={Link}
                    href={project.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <PlayArrowIcon />
                  </IconButton>
                )}
              </CardContent>
            </Card>
          </div>
        ))}
      </Slider>
    </Container>
  );
};

export default Projects;