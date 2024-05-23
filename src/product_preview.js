import { useEffect,useState } from "react";
import Navbar from "./navbar"; 
import './product_view.css'
import jsonData from './products.json'
import React from 'react';
import { Button } from '@mui/material';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import MapPage from "./map_api";
import ReviewCard from "./review_card";

import {useNavigate, useParams} from 'react-router-dom'
function ProductPreview() {
    const {productId}=useParams();
    console.log(productId);
    const [productData, setProductData] = useState(null);
    
    const navigate=useNavigate();
    const handleBuyNow=()=>{
      navigate('/chat',{state:{sellerDetail:productData.sellerInfo}})
      console.log(productData.sellerInfo)
    }

    useEffect(() => {
         const targetProductId = parseInt(productId, 10);
        if (jsonData) {
          const product = jsonData.find((item) => item.id === targetProductId);
          setProductData(product);
        }
      }, [productId]);
      console.log(productData)
      const [imgIndex,setImgIndex]=useState(1);
      const handelImgClick=(index)=>{
        setImgIndex(index);

      }


      if (!productData) {
        return <div>Loading...</div>;
      }


    return(
    <>
    <Navbar/>
    <div className="smallImgsBox">
        {productData.images.length > 0 && (
          <img src={productData.images[0]} alt={productData.title} className="smallImgs" onClick={()=>{handelImgClick(0)}}/>
        )}
        {productData.images.length > 1 && (
          <img src={productData.images[1]} alt={productData.title} className="smallImgs" onClick={()=>{handelImgClick(1)}}/>
        )}
        {productData.images.length > 2 && (
          <img src={productData.images[2]} alt={productData.title} className="smallImgs" onClick={()=>{handelImgClick(2)}}/>
        )}
      </div>
      <div className="bigImgBox">
          {productData.images.length > 0 && (
            <img src={productData.images[imgIndex]} alt={productData.title} className="bigImg" />
           )}
             <Button
                 variant="contained"
                 color="primary"
                 size="large"
                 startIcon={<AddShoppingCartIcon />}
                 onClick={() => alert('Item added to cart!')}
                 sx={{backgroundColor:'#ff9f00','&:hover': {
                    backgroundColor: '#e68a00',
                  },}}
             >
                 Add to Cart
            </Button>
            <Button
               variant="contained"
               color="primary"
               size="large"
               startIcon={<FlashOnIcon />}
               onClick={handleBuyNow}
               sx={{backgroundColor:'#fb641b',marginLeft:'4%','&:hover': {
                backgroundColor: '#e64a19',
              }}}
              >
              Buy Now
            </Button>
      </div>
      <div className="container">
      <div className="productDetail">
        <h2 className="title">{productData.title}</h2>
        <h3 className="smallDescription">{productData.smallDescription}</h3>
        <p className="greenText">Special price</p>
        <h2 className="price">₹{productData.price}</h2>
        <p className="greenText">Used For</p>
        <h3 className="usedTime">{productData.usedTime} Months</h3>
        <p className="greenText">Product Description</p>
        <h4 className="largeDescription">{productData.largeDescription}</h4>
      </div>
      <div className="sellerContact">
        <p className="grayText">Seller</p>
        <p className="seller">{productData.sellerInfo.name}</p><br /><br />
        <p className="grayText">Mobile no</p>
        <p className="mobileNo">{productData.sellerInfo.mobile}</p><br /><br />
        <p className="grayText">Email</p>
        <p className="email">{productData.sellerInfo.email}</p><br /><br />
        <p className="grayText">Location</p>
        <p className="location">{productData.sellerInfo.location.name}</p>
      </div>
      <div className="reviews">
      {productData.reviews.map((review, index) => (
        <ReviewCard key={index} review={review} />
      ))}
      </div>
      <div className="map">
        <MapPage sellerLocation={productData.sellerInfo.location.coordinates}/>      
      </div>
      </div>
    </>
    );
}
export default ProductPreview;