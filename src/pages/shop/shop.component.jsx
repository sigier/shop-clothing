import { Route } from 'react-router-dom';


import {default as CollectionsOverview } from '../../components/collections-overview/collections-overview.container';
import { default as CollectionPage} from '../collection/collection.container';

const ShopPage = ({ match }) => {

    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverview}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </div>
    );
  };


export default ShopPage;
