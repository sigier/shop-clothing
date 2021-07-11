import { gql } from "apollo-boost";

export const typeDefs = gql`
    extend type Mutation {
        ToggleCartHidden: Boolean!
    }
`;

const GET_HIDDEN_CART_TOGGLE = gql`{
    cartHidden @client
}`;

export const resolvers = {
    Mutation: {
        toggleCartHidden: (_root, _args,  {cache}) => {

            const {cartHidden} = cache.readQuery({
                query: GET_HIDDEN_CART_TOGGLE
            });

            cache.writeQuery({
                query: GET_HIDDEN_CART_TOGGLE,
                data: {cartHidden: !cartHidden}
            });

            return !cartHidden;
        }
    }
}