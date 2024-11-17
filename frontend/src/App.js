import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, Box, List, ListItem, ListItemText } from '@mui/material';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/items/');
        setItems(response.data);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };
    fetchItems();
  }, []);

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          JS-PY Project
        </Typography>
        <List>
          {items.map((item) => (
            <ListItem key={item.id}>
              <ListItemText 
                primary={item.name}
                secondary={item.description}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
}

export default App;