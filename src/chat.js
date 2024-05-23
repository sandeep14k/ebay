import React, { useState } from 'react';
import { Box, TextField, Button, Paper } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import ChatMessage from './chat_msg';
import './chat.css';
import Navbar from './navbar';
import { useLocation, useNavigate } from 'react-router-dom';

const Chat = () => {

  const location=useLocation();
  const {sellerDetail}=location.state || {};
  console.log(sellerDetail);
  console.log(sellerDetail.name);
  const navigate=useNavigate();

  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const userId=1; 
    const handleBackClick = () => {
      console.log('Back button clicked');
      navigate(-1);
    }

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        {
          id: messages.length,
          text: newMessage,
          senderId: userId,
          timestamp: new Date(),
        },
      ]);
      setNewMessage('');
    }
  };

  return (
    <>
    <Navbar/>

    <div className="subNavChat">
    <IconButton onClick={handleBackClick}>
      <ArrowBack />
    </IconButton>
    <p className="sellerName">{sellerDetail.name}</p>
    </div>

    <Paper sx={{ height: '85vh', display:'flex', flexDirection: 'column',top:'91px',position:'fixed' ,width:'100%',zIndex:3}}>
      <Box
        sx={{
          flexGrow: 1,
          overflowY: 'auto',
          p: 2,
          borderBottom: '1px solid #ccc',
        }}
      >
        {messages.map((message) => (
          <ChatMessage
            key={message.id}
            message={message}
            isSender={message.senderId === userId}
          />
        ))}
      </Box>
      <Box
        sx={{
          p: 2,
          borderTop: '1px solid #ccc',
          display: 'flex',
        }}
      >
        <TextField
          variant="outlined"
          fullWidth
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleSendMessage();
            }
          }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSendMessage}
          sx={{ ml: 2 }}
        >
          Send
        </Button>
      </Box>
    </Paper>
    </>
  );
};

export default Chat;
