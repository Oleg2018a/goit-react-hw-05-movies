
// const API_KEY = '18ae8060bebf0b033d68015c9d71e143';


import Movies from "page/Movies";
import {  Route, Routes } from "react-router-dom";
import MovieDetails from "page/MovieDetails";
import Home from "page/Home";
import NotFound from "./NotFound/NotFound";
import SharedLayout from "./SharedLayout/SharedLayout";


export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
       <Route index element={<Home/>} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:moviesId" element={<MovieDetails />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
//  <Routes>
//       <Route path="/" element={<SharedLayout />}>
//         <Route index element={<Home />} />
//         <Route path="about" element={<About />}>
//           <Route path="mission" element={<Mission />} />
//           <Route path="team" element={<Team />} />
//           <Route path="reviews" element={<Reviews />} />
//         </Route>
//         <Route path="products" element={<Products />} />
//         <Route path="products/:productId" element={<ProductDetails />} />
//       </Route>
//     </Routes>




