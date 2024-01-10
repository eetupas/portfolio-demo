import React from 'react';
import { Container, Typography, Paper, Grid, LinearProgress } from '@mui/material';

interface Skill {
  name: string;
  proficiency: number;
}

const skills: Skill[] = [
  { name: 'JavaScript', proficiency: 90 },
  { name: 'HTML/CSS', proficiency: 90 },
  { name: 'C#', proficiency: 85 },
  { name: 'TypeScript', proficiency: 85 },
  { name: 'React', proficiency: 85 },
  { name: 'Unity', proficiency: 85 },
  { name: 'Java', proficiency: 75 },
  { name: 'Azure', proficiency: 70},
  { name: 'C++', proficiency: 70 },
];

const Skills: React.FC = () => {
  return (
    <Container maxWidth="xl">
      <Paper elevation={3} sx={{ padding: 3 }}>
        <Typography variant="h4" gutterBottom>
          Osaaminen
        </Typography>
        <Grid container spacing={3}>
          {skills.map((skill, index) => (
            <Grid item key={index} xs={12} md={6}>
              <Typography variant="h6" gutterBottom>
                {skill.name}
              </Typography>
              <LinearProgress variant="determinate" value={skill.proficiency} />
              <Typography variant="body2" color="text.secondary">
                Pätevyys: {skill.proficiency}%
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  );
};

export default Skills;