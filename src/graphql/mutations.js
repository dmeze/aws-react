/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSongs = /* GraphQL */ `
  mutation CreateSongs(
    $input: CreateSongsInput!
    $condition: ModelSongsConditionInput
  ) {
    createSongs(input: $input, condition: $condition) {
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
export const updateSongs = /* GraphQL */ `
  mutation UpdateSongs(
    $input: UpdateSongsInput!
    $condition: ModelSongsConditionInput
  ) {
    updateSongs(input: $input, condition: $condition) {
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
export const deleteSongs = /* GraphQL */ `
  mutation DeleteSongs(
    $input: DeleteSongsInput!
    $condition: ModelSongsConditionInput
  ) {
    deleteSongs(input: $input, condition: $condition) {
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
