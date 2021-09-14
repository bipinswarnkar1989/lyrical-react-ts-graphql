import { gql } from '@apollo/client';

export const getSongs = gql`
  query GetSongs  {
    songs {
      id
      title
    }
  }
`;
