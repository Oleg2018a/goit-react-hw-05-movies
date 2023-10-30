import React from 'react'
import { Character, Name } from './CreditItem.styled';

const CreditItem = ({ credit }) => {
     const defaultImg =
       'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

     const moviesImg = `https://image.tmdb.org/t/p/w500/${credit.profile_path}`;

    const { name, profile_path, character } = credit;
  return (
    <>
      <img src={profile_path ? moviesImg : defaultImg} alt={name} width={100} />
      <div>
        <Name>{name}</Name> 
        <Character>Character: {character}</Character>
      </div>
    </>
  );
}

export default CreditItem