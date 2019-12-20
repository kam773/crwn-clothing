import React from 'react';

import {
  CartItemContainer,
  ItemDetailsContainer,
  CartItemImage
} from './cart-item.styles';

const CartItem = (props) => {
  const {imageUrl, name, price, quantity} = props
  return (
    <CartItemContainer>
        <CartItemImage src={imageUrl} alt='item' />
        <ItemDetailsContainer>
          <span className="name">{name}</span>
          <span className="price">
            {quantity} x ${price}
          </span>
        </ItemDetailsContainer>
      </CartItemContainer>
  )
}


export default React.memo(CartItem);