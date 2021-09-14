import { FC } from 'react';
import { useCreateSong } from '../../hooks/useCreateSong';

export const CreateSong: FC = () => {
  const { title, handleSubmit, handleChange, newSongtitle } = useCreateSong();

  return (
    <div>
      <h3>Create Song</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Song Title</label>
        <input
          type="text"
          name="title"
          id="title"
          onChange={handleChange}
          value={title}
        />
        <button
          aria-disabled={Boolean(!title)}
          disabled={Boolean(!title)}
          type="submit"
        >
          Submit
        </button>
      </form>
      {newSongtitle && <div>New Song Added: {newSongtitle}</div>}
    </div>
  );
};
