import './Card.css'
import { Link } from 'react-router-dom';
import React from 'react';
import { Button} from '@material-ui/core';


const CartCard = ({ info }) => {
    
    const deleteBtn = async () => {
        try {
          const res = await fetch("/collection-cart/remove-item", { method: "POST", headers: { "Content-type": "application/json" },  body: JSON.stringify({ productId:info._id }) });
        
          const data = await res.json();
          console.log(data);
         
          window.location = '/cart';
        } catch (e) {
          console.error("failed to delete");
        //   setErrorMessage(true);
        }
       
      };
  return (
      <div className='cardWrapper'>
          <div className="imgWrapper">
              <img src={info.picture} alt="no data" />
          </div>
          <div className="info">
              <p className="infoTitle">{info.name}</p>
              <p className="infoDetail">$ {info.price} </p>
              <p className="more"><Link to={"/detail/?id="+info._id}>view more</Link></p>
              <Button variant="contained" color="black" onClick={deleteBtn}>
                Remove from Favourites
              </Button>
          </div>
      </div>
  )
}

export default CartCard