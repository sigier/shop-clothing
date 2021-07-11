import { graphql } from "react-apollo";
import { flowRight } from "lodash";
import {gql } from "apollo-boost";

import CartIcon from "./cart-icon.component";


const GET_HIDDEN_CART_TOGGLE = gql`
    mutation ToggleCartHidden
    {
        toggleCartHidden @client
    }`;

const GET_CART_ITEMS_COUNT = gql`{
        itemsCount @client
    }`;


const cartIconContainer = ({data:{itemsCount}, toggleCartHidden}) => (
    
    <CartIcon 
      toggleCartHidden={toggleCartHidden} 
      itemsCount={itemsCount} 
    />

);

export default flowRight(
    graphql(GET_CART_ITEMS_COUNT),
    graphql(GET_HIDDEN_CART_TOGGLE, { 'name': 'toggleCartHidden'})
)(cartIconContainer);