import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import {Link} from 'react-router-dom';


const ProductCards = ({ productsData }) => {
  return (
    <div className="products" >
      {productsData.map((product) => (
        <Link to={`/productview/${product.id}`} key={product.id} style={{ textDecoration: 'none' }} className='marketProductLink'>
        <Card  className='marketProductCard'>
          <CardMedia
            component="img"
            height="140"
            width="40%"
            image={product.images[0]} 
            alt={product.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {product.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.smallDescription}
            </Typography>
            <Typography variant="body1" color="text.primary">
              Price: {product.price.toFixed(2)}
            </Typography>
          </CardContent>
        </Card>
        </Link>
      ))}
    </div>
  );
};

export default ProductCards;
