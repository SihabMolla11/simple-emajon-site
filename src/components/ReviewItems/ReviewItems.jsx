import React from "react";
import "./reviewItem.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ReviewItems = ({ review, handelRemoveProduct }) => {
  // console.log(review);
  const { id, img, name, price, quantity } = review;
  return (
    <div className="review-item">
        <div className="review-info">
            <img className="review-img" src={img} alt="" />
            <div className="review-ditail">
                <p className="review-title">{name}</p>
                <p>Price: <span className="orange-text">${price}</span></p>
                <p>quantity: <span className="orange-text">{quantity}</span></p>
            </div>
        </div>
        <button onClick={()=>handelRemoveProduct(id)} className="delete-button"><FontAwesomeIcon className="delet-btn-icon" icon={faTrashAlt} /></button>

    </div>
  );
};

export default ReviewItems;
