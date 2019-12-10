import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import CollectionsOverview from './collections-overview.component';
import Sinner from '../spinner/spinner.component';
// instead of .query like the query done in index.
const GET_COLLECTIONS = qgl`
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
// get a function back and from it destructure off loading, error, data
// if loading, return the Spinner component
// else return colletionsOveriew with collections and it's data that we know comes back from the query 
// 
const CollectionsOverviewContainer = () => (
    <Query query={GET_COLLECTIONS}>
        {
            ({ loading, error,data }) => {
                if (loading) return <Spinner />;
                return <CollectionsOverview collections={data.collections} />;
            }
        }
    </Query>
)

export default CollectionsOverviewContainer; 

{/* <Query
query={GET_COLLECTION_BY_TITLE}
variables={‌{ title: match.params.collectionId }}
>
{({ loading, data }) => {
  if (loading) return <Spinner />;
  const { getCollectionsByTitle } = data; <===== // Like so
  return <CollectionPage collection={getCollectionsByTitle} />;
}}
</Query> */}