import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import { useMutation } from "@apollo/client";

import { createSongMutation } from "../graphql/mutations/create-song";

export const useCreateSong = () => {
    const [title, setTitle] = useState<string>('');
    const [newSongtitle, setNewSongTitle] = useState<string>('');
    const [createSong] = useMutation(createSongMutation);

    const handleChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
           setTitle(event.target.value)
        },
        []
    );

    const handleSubmit = useCallback(
        async (event: FormEvent) => {
           event.preventDefault();
           try {
            await createSong({
                variables: { title },
                update(cache, { data: { addSong }}){
                     setNewSongTitle(addSong.title)
                     cache.modify({
                         fields: {
 
                         }
                     })
                }
            });
           } catch (error) {
               console.log(error)
           }
        },
        [createSong, title]
    )

    return {
        title,
        handleSubmit,
        handleChange,
        newSongtitle,
    }
}