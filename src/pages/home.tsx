import { Box, Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <Box sx={{ padding: '1rem' }}>
      <h1>Welcome to the Home Page</h1>
      <div>
        <Link to='/validations'>
          <Button variant='contained'>Demo part 1</Button>
        </Link>
        <Link to='/api-calls'>
          <Button sx={{ marginLeft: '1rem' }} variant='contained'>
            Demo part 2
          </Button>
        </Link>
      </div>
    </Box>
  );
};

export default HomePage;
