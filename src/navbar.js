import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { Typography,Box} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Navbar(){
  const navigate=useNavigate();
  const handleAccountClick=()=>{
    navigate('/profile')
  }
  const [searchValue,setSearchValue]=useState('');
  const handleInputChange=(event)=>{
    setSearchValue(event.target.value)
  }
  const handleSearchClick=()=>{
    navigate('/')
  }
return(
    <div className="navbar">
     <Paper
         component="form"
         sx={{ display: 'flex',
               position:'fixed',
               width:'100%', 
               alignItems: 'center',
               backgroundColor:'#2874f0',
               height:'50px',
               borderRadius:'0',
               zIndex:2,
            }}
            >
   <Typography variant="h5" 
               style={{ color:'white',
                        marginLeft:'10%',
                        fontWeight:'bold', 
                      }}
                className='navTitle'>Campus Ebay</Typography>

   <LocalMallIcon style={{ fontSize: 40, color: 'yellow' ,marginRight:5}} />
   <Box sx={{backgroundColor:'white',
            height:'33px',
            width:'35%',
            boxShadow:0.8,
            borderEndStartRadius:1,borderTopLeftRadius:1,
            minWidth:150}}
            
        onSubmit={handleSearchClick}>
  <InputBase
        sx={{
          width:'100%',
          paddingLeft:'10px'
           }}
        placeholder="Search for Products "
        value={searchValue}
        onChange={handleInputChange}
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      </Box>
      <IconButton type="button" 
                  sx={{ backgroundColor:'white',
                        borderRadius:'0px',
                        height:'33px',
                        color:'blue',
                        fontWeight:'bold',
                        borderTopRightRadius:1,borderBottomRightRadius:1 ,
                        '&:hover': {
                              backgroundColor: 'white',
                    }}} aria-label="search"
                    onClick={handleSearchClick}
                    >
        <SearchIcon />
      </IconButton>
      <IconButton
      sx={{
        fontSize: 40,
        color: 'white',
        '&:hover': {
          color: 'white', 
        },
        position:'absolute',
        right:'0',   
      }}
      className='navAccountIcon'
      aria-label="account"
      onClick={handleAccountClick}
    >
      <AccountCircleIcon sx={{ fontSize: 40 }} />
    </IconButton>
    </Paper>
    </div>
);
}
export default Navbar;