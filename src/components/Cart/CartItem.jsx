import React from 'react'
import { FaArrowUp, FaArrowDown} from 'react-icons/fa'
import { useGlobalContext } from '../../context';
import "./CartItem.css";
const CartItem = ({ id, image, title, price,  } ) => {
  console.log(image);
    
  const { remove, increase, decrease, toggleAmount } = useGlobalContext()
  return (
    <div className="cart-item">
      <img src={image} alt={title} />
      <div>
        <h4>{title.substring(0, 20)}</h4>
        <h4 className="item-price">${price}</h4>

        <button className="remove-btn" onClick={() => remove(id)}>
          remove
        </button>
      </div>
      <div>
        <button className="amount-btn" onClick={() => increase(id, "INCREASE")}>
          {<FaArrowUp />}
        </button>

        <p className="amount"></p>

        <button className="amount-btn" onClick={() => decrease(id, "DECREASE")}>
          {<FaArrowDown />}
        </button>
      </div>
    </div>
)}

export default CartItem
