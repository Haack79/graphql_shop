import React from 'react';
import { Route } from 'react-router-dom';

// import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
// import collectionsoverviewcontainer as alias collectionsoverview so don't need to change it all over
import { default as CollectionsOverview } from '../../components/collections-overview/collections-overview.container';
import { default as CollectionPage } from '../collection/collection.container';

const ShopPage = ({ match }) => (
  <div className='shop-page'>
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;