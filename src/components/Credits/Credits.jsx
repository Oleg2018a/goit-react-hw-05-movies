import React, { useEffect, useState } from 'react'
import { GetCredits } from 'api'
import { useParams } from 'react-router-dom';
import CreditsList from 'components/CreditsList/CreditsList';

const Credits = () => {
     const { moviesId } = useParams();
  const [credits, setCredits] = useState([])

    useEffect(() => {
        const getCreditsTeam = async moviesId => {
          try {
            const credit = await GetCredits(moviesId);
            setCredits([...credit.cast]);
          } catch (error) {
            console.error('qwertyuiujhgfdewertghg');
          }
        };
        getCreditsTeam(moviesId);
    },[ moviesId])
 
  
    return (
        <>
            <CreditsList credits={credits} />
           
      </>
    );
}

export default Credits