import { ApolloProvider } from "@apollo/client";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { client } from "../../apollo/client";
import { ListSongs } from "./ListSongs";

describe('<ListSongs />', () => {
    it('should render songs', async () =>{
        render(
            <ApolloProvider client={client}>
                <BrowserRouter>
                <ListSongs />
                </BrowserRouter>
            </ApolloProvider>
        )

        
    })
})