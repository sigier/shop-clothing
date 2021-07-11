import { Query, Mutation } from "react-apollo";
import { gql } from "apollo-boost";
import CartDropdown from "./cart-dropdown.component";


const GET_HIDDEN_CART_TOGGLE = gql`
    mutation ToggleCartHidden
    {
        toggleCartHidden @client
    }`;

const GET_CART_ITEMS = gql`
    {
       cartItems @client
    }`;


const CartDropdownContainer = () => (

    <Mutation mutation={GET_HIDDEN_CART_TOGGLE}>
        {
            toggleCartHidden => (
                <Query query={GET_CART_ITEMS}>
                    {
                        ({data: {cartItems}}) => (
                            <CartDropdown
                             cartItems={cartItems}
                             toggleCartHidden={toggleCartHidden}
                            />
                        )
                    }
                </Query>
            )
        }
    </Mutation>
);

export default CartDropdownContainer;