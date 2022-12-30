import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/UserContext';
import Loader from '../Loader/Loader';
import MediaCard from './MediaCard';

const Media = () => {
  const { user } = useContext(AuthContext);
  const {
    data: info = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["posts", user],
    queryFn: async () => {
      const res = await fetch(
        'http://localhost:5000/posts',
        {
          headers: {},
        }
      );
      const data = await res.json();

      refetch();
      return data;
    },
  });
  if (isLoading) {
    return <Loader></Loader>;
  }
  console.log(info);
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
      {
        info.map(media =>(
          <MediaCard
          media={media}
          key={media._id}></MediaCard>
        ))
      }
    </div>
  );
};

export default Media;