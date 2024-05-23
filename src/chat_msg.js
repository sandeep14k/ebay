import React from 'react';
import { Box, Typography } from '@mui/material';

const ChatMessage = ({ message, isSender }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: isSender ? 'flex-end' : 'flex-start',
        mb: 2,
      }}
    >
      <Box
        sx={{
          p: 2,
          bgcolor: isSender ? 'primary.main' : 'grey.300',
          color: isSender ? 'white' : 'black',
          borderRadius: 1,
          maxWidth: '70%',
        }}
      >
        <Typography variant="body1">{message.text}</Typography>
        <Typography variant="body2" sx={{ textAlign: 'right', mt: 1 }}>
          {new Date(message.timestamp).toLocaleTimeString()}
        </Typography>
      </Box>
    </Box>
  );
};

export default ChatMessage;
