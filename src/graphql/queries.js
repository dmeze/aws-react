/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSongs = /* GraphQL */ `
  query GetSongs($id: ID!) {
    getSongs(id: $id) {
      id
      title
      description
      filePath
      imagePath
      like
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listSongs = /* GraphQL */ `
  query ListSongs(
    $filter: ModelSongsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSongs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        filePath
        imagePath
        like
        owner
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
