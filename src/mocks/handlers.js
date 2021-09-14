// src/mocks/handlers.js
import { graphql } from 'msw';

export const handlers = [
  // Handles a "createSong" mutation
  graphql.mutation('AddSong', (req, res, ctx) => {
    const { title } = req.variables;
  
    return res(
      ctx.data({
        addSong: {
          id: "",
          title
        },
      })
    );
  }),
  graphql.query('GetSongs', (req, res, ctx) => {
    return res(
      ctx.data({
        songs: [
          {
            id: "613265989e891b367f4be30d",
            title: "Bipin Swarn"
          },
          {
            id: "6133b9fc683e173adf7bc51e",
            title: "Yogurt express"
          }
        ]
      })
    )
  })
];
