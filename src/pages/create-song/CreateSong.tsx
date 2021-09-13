import { FC } from "react";
import { useCreateSong } from "../../hooks/useCreateSong";

export const CreateSong:FC = () => {
    const {
        title,
        handleSubmit,
        handleChange,
        newSongtitle,
    } = useCreateSong();
    
    return (
        <div>
        <h3>Create Song</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Song Title</label>
          <input type="text" name="title" id="title" onChange={handleChange} value={title} />
          <button disabled={Boolean(!title)} type="submit">Submit</button>
          {newSongtitle && <span>New Song Added: {newSongtitle}</span>}
        </form>
      </div>
    )
}