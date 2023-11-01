import { BiArrowBack } from 'react-icons/bi';
import React, { useRef } from 'react';
import { Link, useLocation, } from 'react-router-dom';

const ButtonBack = () => {
  let location = useLocation();
  //  const backLinkHref = location.state?.from ?? '/';
  const backLinkToRef = useRef(location.state?.from ?? '/');

  console.log(location)
  console.log(backLinkToRef.current)

  return (
    <Link to={backLinkToRef.current}>
      <BiArrowBack />
      <span>Go back</span>
    </Link>
  );
};

export default ButtonBack;
