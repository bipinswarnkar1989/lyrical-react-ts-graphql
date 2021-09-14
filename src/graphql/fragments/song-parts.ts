import { gql } from '@apollo/client';

export const SongParts = gql`
  fragment NewSong on Song {
    id
    title
    type
  }
`;
