import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import CollectionPage from './collection.component';
import Spinner from '../../components/spinner/spinner.component';
// below is graphql language with the $ sign for title. 
// gql graph query language/ 
// dollar title which is a string,  $title = make query request in our server, and define its type
// going to get an object title, 
const GET_COLLECTION_BY_TITLE = gql`
    query getCollectionsByTitle($title: String!) {
        getCollectionsByTitle(title: $title) {
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
const CollectionPageContainer = ({ match }) => (
    <Query
        query={GET_COLLECTION_BY_TITLE}
        variables={‌{title: match.params.collectionId}}
    >
    {({ loading, data }) => {
      if (loading) return <Spinner />;
      const { getCollectionsByTitle } = data;
      return <CollectionPage collection={getCollectionsByTitle} />;
    }}
    </Query>
);
export default CollectionPageContainer; 