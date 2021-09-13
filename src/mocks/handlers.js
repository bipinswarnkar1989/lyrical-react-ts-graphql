// src/mocks/handlers.js
import { graphql } from 'msw';

export const handlers = [
  // Handles a "createSong" mutation
  graphql.mutation('CreateSong', (req, res, ctx) => {
    return res(
      ctx.data({
        addSong: {
          title: 'Tate paiba paain',
          id: '613ddfc42fb69e95b7934cfb',
          __typename: 'SongType'
        },
      })
    );
  }),
];
