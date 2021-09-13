import { gql } from "@apollo/client";

export const createSongMutation = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      title
      id
    }
  }
`;