import Navbar from "./navbar";
import React, { useState ,useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Grid } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import './market_place.css'
import FilterCard from "./filter_card";
import ProductCards from "./product_card_marketPlace";
import jsonData from'./products.json'

function MarketPlace() {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        if (jsonData) {
          setProduct(jsonData);
        }
      }, []);

    const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const [showFilter, setShowFilter] = useState(false);

  const handleFilterClick = () => {
    setShowFilter((prev) => !prev);
  };
  const handleCategoryClick=(category)=>{
   console.log(category);
   const products = jsonData.filter(item => item.category === category);
    setProduct(products);
    console.log(products)
    setAnchorEl(null)
  }
  

  const categories = ['Mattresses', 'Cooler', 'Heater', 'Cycle', 'Book', 'Laptop'];
  return(
    <>
    <Navbar/>
    <div className="nav">
    <AppBar position="static" style={{ backgroundColor: 'white' ,position:'fixed',top:'40px',height:50,zIndex:1}}>
      <Toolbar>
        {isMobile ? (
          <>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              All Categories &#9660;
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={open}
              onClose={handleClose}
            >
              {categories.map((category) => (
                <MenuItem key={category} onClick={()=>{handleCategoryClick(category)}}>
                  {category}
                </MenuItem>
              ))}
            </Menu>
            <Button onClick={handleFilterClick} style={{ marginLeft: 'auto' }}>
                Filter
            </Button>
          </>
        ) : (
          <Grid container spacing={0}>
            {categories.map((category) => (
              <Grid item xs={2} key={category}>
                <Button  fullWidth sx={{color:'black'}} onClick={()=>{handleCategoryClick(category)}}>
                  {category}
                </Button>
              </Grid>
            ))}
          </Grid>
        )}
      </Toolbar>
    </AppBar>
    </div>
    <div className="filter" style={{ display: isMobile ? (showFilter ? 'block' : 'none') : 'block', 
                                     width: isMobile ? '100%' : '25%', 
                                     padding: isMobile ? '0em' : '1em', 
                                     position: isMobile ? 'absolute' : 'fixed', 
                                     left: isMobile ? '0em' : '1em', 
                                     top: isMobile ? '92px' : '100px', 
                                     borderRadius: isMobile ? '0' : '0', 
                                     zIndex:isMobile ? 1:1}}>
      <FilterCard/>
    </div>
    <div className="products">
       <ProductCards productsData={product}/>
    </div>
    </>
  );
}
export default MarketPlace;