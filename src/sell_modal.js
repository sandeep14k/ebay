import React, { useState } from 'react';
import { Modal, Box, TextField, Button, Typography } from '@mui/material';

const SellModal = ({ open, onClose }) => {
  const [title, setTitle] = useState('');
  const [smallDescription, setSmallDescription] = useState('');
  const [longDescription, setLongDescription] = useState('');
  const [price, setPrice] = useState('');
  const [usedTime, setUsedTime] = useState('');
  const [category, setCategory] = useState('');
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState('');

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    if (files.length !== 3) {
      setError('Please upload exactly three images.');
    } else {
      setError('');
      setPhotos(files);
    }
  };

  const handleAddProduct = () => {
    if (photos.length !== 3) {
      setError('Please upload exactly three images.');
      return;
    }

    // Handle the sell action, like sending data to a server
    console.log({
      title,
      smallDescription,
      longDescription,
      price,
      usedTime,
      category,
      photos,
    });
    onClose();
  };

  const handleCancel = () => {
    // Reset the form fields
    setTitle('');
    setSmallDescription('');
    setLongDescription('');
    setPrice('');
    setUsedTime('');
    setCategory('');
    setPhotos([]);
    setError('');
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{ ...modalStyle }}>
        <Typography variant="h6" component="h2">
          Sell a Product
        </Typography>
        <TextField
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Small Description"
          value={smallDescription}
          onChange={(e) => setSmallDescription(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Long Description"
          value={longDescription}
          onChange={(e) => setLongDescription(e.target.value)}
          fullWidth
          margin="normal"
          multiline
        />
        <TextField
          label="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Used Time"
          value={usedTime}
          onChange={(e) => setUsedTime(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          fullWidth
          margin="normal"
        />
        <input
          accept="image/*"
          type="file"
          multiple
          onChange={handleFileChange}
          style={{ margin: '20px 0' }}
        />
        {error && <Typography color="error">{error}</Typography>}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
          <Button variant="contained" color="primary" onClick={handleAddProduct}>
            Add Product
          </Button>
          <Button variant="contained" color="secondary" onClick={handleCancel}>
            Cancel
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

const modalStyle = {
  position: 'relative',
  top: '50%',
  left: '50%',

  transform: 'translate(-50%, -50%)',
  width: '90%',
  
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default SellModal;
