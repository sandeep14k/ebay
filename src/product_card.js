import React, { useRef } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


function ProductCard({ product }) {
  const { title, description, p,imageUrl } = product;

  return (
    <Card style={{ minWidth: 200,border:'1px solid rgba(216, 217, 216, 0.5)',marginLeft:2 ,marginBottom:0,height:'60%'}}>
      <CardMedia
        component="img"
        style={{ minWidth: 180, objectFit: 'contain',height:'40%' }}
        image={product.image}
        alt={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
}
function ProductSlider({ products }) {
  const containerRef = useRef(null);
  return (
    <div style={{ overflowX: 'auto', '&::-webkit-scrollbar': { display: 'none' } }}>
      <div ref={containerRef} style={{ display: 'flex' }}>
        {products.map((product, index) => (
          <div key={index} style={{ marginRight: 8 }}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductSlider;
