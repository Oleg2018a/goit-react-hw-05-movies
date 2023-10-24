import axios from 'axios';


// const BASE_URL = 'https://api.themoviedb.org';
// const HEADERS =  {
//         accept: 'application/json',
//         Authorization:
//           'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOGFlODA2MGJlYmYwYjAzM2Q2ODAxNWM5ZDcxZTE0MyIsInN1YiI6IjY1MzRlMTkyOTFmMGVhMDBmZTFhMTkyMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lqscCdZGhMFNxRoh2ci4H3mtDc9ngDksBg0orgk8OlQ',
//       }

/////////////////// const options = {
      // method: 'GET',
      // url: `${BASE_URL}/3/trending/all/day?language=en-US`,
      // headers: HEADERS,
// };
    

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