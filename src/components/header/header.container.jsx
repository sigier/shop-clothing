import { Query } from "react-apollo";
import { gql } from "apollo-boost";

import Header from "../header/header.component";

const GET_HIDDEN_CART_TOGGLE = gql`{
    cartHidden @client
}`;

const HeaderContainer = () => (

    <Query query={GET_HIDDEN_CART_TOGGLE}>
        {
            ({data: {cartHidden}}) => <Header hidden={cartHidden}/>
        }
    </Query>
);

export default HeaderContainer;