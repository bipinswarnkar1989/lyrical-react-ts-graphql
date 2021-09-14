import { useQuery } from '@apollo/client';
import { FC, useMemo } from 'react';
import { Link } from 'react-router-dom';

import { FaTrash } from 'react-icons/fa'

import './style.css';

import { getSongs } from '../../graphql/queries/get-songs';

interface SongDataType {
  id: string;
  title: string;
}

interface Songs {
  songs: SongDataType[] | null;
}

export const ListSongs: FC = () => {
  const { data, loading, error } = useQuery<Songs>(getSongs);

  const renderSongs = useMemo(() => {
    return data?.songs?.map(({ id, title }) => {
      return (
        <li key={id} className="song__item">
          <Link to={`/songs/${id}`}>{title}</Link>
          <FaTrash className="delete-icon" />
        </li>
      );
    });
  }, [data]);

  if (!data && loading) {
    return <div>Loading songs...</div>;
  }
  if (!data && error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <ul className="song">{renderSongs}</ul>
    </div>
  );
};
