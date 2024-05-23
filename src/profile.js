import React, { useState, useEffect } from 'react';
import './profile.css';
import Navbar from './navbar';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import EditIcon from '@mui/icons-material/Edit';
import { Button } from '@mui/material';
import ProductSlider from './product_card';
import jsonData from './buy_sell.json';
import EditModal from './edit';
import SellModal from './sell_modal';

const Profile = () => {
  const handleLogout = () => {};
  const [buyData, setBuyData] = useState([]);
  const [sellData, setSellData] = useState([]);
  const [onSellData, setOnSellData] = useState([]);
  const [name, setName] = useState('Sandeep Jha');
  const [email, setEmail] = useState('sandeepkj23@iitk.ac.in');
  const [mobile, setMobile] = useState('9898998565');
  const [editOpen, setEditOpen] = useState(false);
  const [sellOpen, setSellOpen] = useState(false);

  useEffect(() => {
    if (jsonData) {
      setBuyData(jsonData.buy);
      setSellData(jsonData.sell);
      setOnSellData(jsonData.onsell);
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className="profileBody">
        <div className="profileCard">
          <img
            src={'https://th.bing.com/th/id/OIP.tvaMwK3QuFxhTYg4PSNNVAHaHa?rs=1&pid=ImgDetMain'}
            alt={''}
            className="img"
          />
          <center className="details">
            <h4 className="name">{name}</h4>
            <p className="email">{email}</p>
            <p className="mobile">Mobile no: {mobile}</p>
          </center>
          <Button
            variant="contained"
            endIcon={<EditIcon />}
            sx={{ margin: '0px 5% 0px 10%' }}
            onClick={() => setEditOpen(true)}
          >
            Edit
          </Button>
          <Button variant="contained" endIcon={<ShoppingCartIcon />}>
            Cart
          </Button>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<ExitToAppIcon />}
            onClick={handleLogout}
            sx={{ margin: '15% 0% 0% 25%' }}
            className="logout"
          >
            Logout
          </Button>
        </div>
        <div className="profileContainer">
          <div className="buy">
            <h4 className="buyTitle">Bought</h4>
            <ProductSlider products={buyData} />
          </div>
          <div className="sold">
            <h4 className="sellTitle">Sold</h4>
            <ProductSlider products={sellData} />
          </div>
          <div className="onSell">
            <h4 className="onSellTitle">On Sell</h4>
            <Button variant="contained" sx={{right:'5px',position:'absolute'}} onClick={() => setSellOpen(true)}>
              Sell
            </Button><br /><br />
            <ProductSlider products={onSellData} />
          </div>
        </div>
      </div>
      <EditModal
        open={editOpen}
        onClose={() => setEditOpen(false)}
        name={name}
        email={email}
        mobile={mobile}
        setName={setName}
        setEmail={setEmail}
        setMobile={setMobile}
      />
      <SellModal open={sellOpen} onClose={() => setSellOpen(false)} />
    </>
  );
};

export default Profile;
