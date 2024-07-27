import React from 'react';
import { Container, Typography, Box, CircularProgress } from '@mui/material';
import { styled } from '@mui/system';

const Background = styled(Box)({
  backgroundColor: '#f5f5f5',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  padding: '0 20px'
});

const StyledContainer = styled(Container)({
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  padding: '40px 20px'
});

const StyledTitle = styled(Typography)({
  fontSize: '2rem',
  fontWeight: 'bold',
  marginBottom: '20px'
});

const StyledMessage = styled(Typography)({
  fontSize: '1.2rem',
  marginBottom: '20px'
});

const StyledCircularProgress = styled(CircularProgress)({
  margin: '20px 0'
});

function App() {
  return (
    <Background>
      <StyledContainer maxWidth="sm">
        <StyledTitle variant="h4" component="h1">
          Site en maintenance
        </StyledTitle>
        <StyledMessage variant="body1">
          Ce site est actuellement en maintenance pour vous offrir une meilleure expérience. Nous serons de retour bientôt.
        </StyledMessage>
        <StyledCircularProgress />
        <Typography variant="body2" color="textSecondary">
          Merci de votre patience.
        </Typography>
      </StyledContainer>
    </Background>
  );
}

export default App;
