import React, { useState } from 'react';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

const EditModal = ({ open, onClose, name, email, mobile, setName, setEmail, setMobile }) => {
  const [tempName, setTempName] = useState(name);
  const [tempEmail, setTempEmail] = useState(email);
  const [tempMobile, setTempMobile] = useState(mobile);

  const handleUpdate = () => {
    setName(tempName);
    setEmail(tempEmail);
    setMobile(tempMobile);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Edit Profile</DialogTitle>
      <DialogContent>
        <TextField margin="dense" label="Name" fullWidth value={tempName} onChange={(e) => setTempName(e.target.value)} />
        <TextField margin="dense" label="Email" fullWidth value={tempEmail} onChange={(e) => setTempEmail(e.target.value)} />
        <TextField margin="dense" label="Mobile No" fullWidth value={tempMobile} onChange={(e) => setTempMobile(e.target.value)} />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleUpdate} variant="contained">Update</Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditModal;
