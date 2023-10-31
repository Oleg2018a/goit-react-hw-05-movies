import { BiArrowBack } from 'react-icons/bi';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const ButtonBack = () => {
  let location = useLocation();
   const backLinkHref = location.state?.from ?? '/';


  return (
    <Link to={backLinkHref}  >
      <BiArrowBack />
      <span>Go back</span>
    </Link>
  );
};

export default ButtonBack;
