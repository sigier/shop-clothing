import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import CollectionsOverview from './collections-overview.component';
import Spinner from "../spinner/spinner.component"


const GET_COLLECTIONS = gql`
  {
    collections {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`;

const CollectionsOverviewContainer = () => (

  <Query query ={GET_COLLECTIONS}>
    {
      ({ loading, error, data }) => {
        
        if (loading) return <Spinner/>;

        return <CollectionsOverview collections={data.collections} />
      }
    }
  </Query>
);

export default CollectionsOverviewContainer;



/*import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';
import WithSpinner from '../with-spinner/with-spinner.component';
import CollectionsOverview from './collections-overview.component';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;*/
