import {
  CartContainer,
  ShoppingIcon,
  ItemCountContainer
} from './cart-icon.styles';


const CartIcon = ({ toggleCartHidden, itemsCount }) => (
  <CartContainer onClick={toggleCartHidden}>
    <ShoppingIcon />
    <ItemCountContainer>{itemsCount}</ItemCountContainer>
  </CartContainer>
);


export default CartIcon;
