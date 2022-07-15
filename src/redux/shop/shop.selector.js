import { createSelector } from 'reselect';


// const COLLECTION_ID_MAP = {
//   hats: 1,
//   jackets: 3,
//   sneakers: 2,
//   womens: 4,
//   mens: 5
// }

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop], shop => shop.collections
) 

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => collections ? Object.keys(collections).map(key => collections[key]) : [] // Verifying if there is no value
);

// Use this to find the URL params matching the params to the id i.e hats === 1,   shop data stored in an

// export const selectCollection = collectionUrlParam => (
//   createSelector(
//     [selectCollections], collections => collections.find(
//       collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
//     )
//   )
// )

// Use this when you have converted the shop data to an object. 
// storing data as objects === data normalization.

export const selectCollection = collectioUrlParam => createSelector(
  [selectCollections],
  collections => (collections ? collections[collectioUrlParam] : null)
);
