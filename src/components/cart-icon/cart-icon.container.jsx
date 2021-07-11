import { Mutation } from "react-apollo";
import {gql } from "apollo-boost";

import CartIcon from "./cart-icon.component";


const GET_HIDDEN_CART_TOGGLE = gql`
    mutation ToggleCartHidden
    {
        toggleCartHidden @client
    }`;

const cartIconContainer = () => (

    <Mutation mutation={GET_HIDDEN_CART_TOGGLE}>
        {
            toggleCartHidden => <CartIcon toggleCartHidden={toggleCartHidden}/>
        }
    </Mutation>

);

export default cartIconContainer;