import { ApolloProvider } from '@apollo/client';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { client } from '../../apollo/client';

import { CreateSong } from './CreateSong';

describe('<CreateSong />', () => {
  it('should render form with title and user should be able to enter title input', async () => {
    render(
      <ApolloProvider client={client}>
        <CreateSong />
      </ApolloProvider>
    );
   
    const newSongtitle = "first song";
    const pageTitle = screen.getByText('Create Song');
    const submitButton = screen.getByRole('button', {
      name: 'Submit',
    });

    expect(pageTitle).toBeInTheDocument();
    expect(submitButton).toBeDisabled();

    const titleInput = screen.getByLabelText(/title/i);
    userEvent.clear(titleInput);
    userEvent.type(titleInput, newSongtitle);

    expect(submitButton).toBeEnabled();

    userEvent.click(submitButton);
    
    const song = await screen.findByText(newSongtitle, { exact: false });
    expect(song).toBeInTheDocument();
  });
});
