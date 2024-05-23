import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import './market_place.css'

const FilterCard = () => {
  const [priceRange, setPriceRange] = useState([0, 80]);
  const [usedTimeRange, setUsedTimeRange] = useState([0, 12]);
  const [location, setLocation] = useState('');
  const [colors, setColors] = useState({
    red: false,
    blue: false,
    green: false,
    yellow: false,
  });

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const handleUsedTimeChange = (event, newValue) => {
    setUsedTimeRange(newValue);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleColorChange = (event) => {
    setColors({
      ...colors,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <Card className='filterCard'>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Filter Options
        </Typography>

        {/* Price Range Slider */}
        <Typography variant="subtitle1" gutterBottom>
          Price Range
        </Typography>
        <Slider
          value={priceRange}
          onChange={handlePriceChange}
          valueLabelDisplay="auto"
          min={0}
          max={10000}
        />

        {/* Used Time Range Slider */}
        <Typography variant="subtitle1" gutterBottom>
          Used Time Range (months)
        </Typography>
        <Slider
          value={usedTimeRange}
          onChange={handleUsedTimeChange}
          valueLabelDisplay="auto"
          min={0}
          max={48}
        />

        {/* Location Select */}
        <FormControl fullWidth margin="normal">
          <InputLabel>Location</InputLabel>
          <Select
            value={location}
            onChange={handleLocationChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="New York">Hall 1</MenuItem>
            <MenuItem value="Los Angeles">Hall 6</MenuItem>
            <MenuItem value="Chicago">Hall 3</MenuItem>
          </Select>
        </FormControl>

        {/* Color Options */}
        <Typography variant="subtitle1" gutterBottom>
          Color Options
        </Typography>
        {['red', 'blue', 'green', 'yellow'].map((color) => (
          <FormControlLabel
            key={color}
            control={
              <Checkbox
                checked={colors[color]}
                onChange={handleColorChange}
                name={color}
                color="primary"
              />
            }
            label={color.charAt(0).toUpperCase() + color.slice(1)}
          />
        ))}
      </CardContent>
    </Card>
  );
};

export default FilterCard;
