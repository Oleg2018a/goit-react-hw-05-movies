import axios from 'axios';

export const getTopMovies = async () => {
    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/trending/all/day',
      params: { language: 'en-US' },
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOGFlODA2MGJlYmYwYjAzM2Q2ODAxNWM5ZDcxZTE0MyIsInN1YiI6IjY1MzRlMTkyOTFmMGVhMDBmZTFhMTkyMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lqscCdZGhMFNxRoh2ci4H3mtDc9ngDksBg0orgk8OlQ',
      },
    };
    const { data } = await axios(options);
  return data;
}
export const getDetails = async moviesId => {
  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/${moviesId}`,
    params: { language: 'en-US' },
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOGFlODA2MGJlYmYwYjAzM2Q2ODAxNWM5ZDcxZTE0MyIsInN1YiI6IjY1MzRlMTkyOTFmMGVhMDBmZTFhMTkyMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lqscCdZGhMFNxRoh2ci4H3mtDc9ngDksBg0orgk8OlQ',
    },
  };
  const { data } = await axios(options);

  return data;
};

export const GetCredits = async moviesId => {
  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/${moviesId}/credits`,
    params: { language: 'en-US' },
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOGFlODA2MGJlYmYwYjAzM2Q2ODAxNWM5ZDcxZTE0MyIsInN1YiI6IjY1MzRlMTkyOTFmMGVhMDBmZTFhMTkyMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lqscCdZGhMFNxRoh2ci4H3mtDc9ngDksBg0orgk8OlQ',
    },
  };
  const { data } = await axios(options);
 
  return data;
};

export const GetReviews = async moviesId => {
  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/${moviesId}/reviews`,
    params: { language: 'en-US', page: '1' },
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOGFlODA2MGJlYmYwYjAzM2Q2ODAxNWM5ZDcxZTE0MyIsInN1YiI6IjY1MzRlMTkyOTFmMGVhMDBmZTFhMTkyMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lqscCdZGhMFNxRoh2ci4H3mtDc9ngDksBg0orgk8OlQ',
    },
  };
  const { data } = await axios(options)
  
  return data
}

export const getSearchMovies = async query  => {
   const options = {
     method: 'GET',
     url: 'https://api.themoviedb.org/3/search/movie',
     params: {
       query: query,
       include_adult: 'false',
       language: 'en-US',
       page: '1',
     },
     headers: {
       accept: 'application/json',
       Authorization:
         'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOGFlODA2MGJlYmYwYjAzM2Q2ODAxNWM5ZDcxZTE0MyIsInN1YiI6IjY1MzRlMTkyOTFmMGVhMDBmZTFhMTkyMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lqscCdZGhMFNxRoh2ci4H3mtDc9ngDksBg0orgk8OlQ',
     },
  };
  const { data } = await axios(options) 
  return data
  
 } 