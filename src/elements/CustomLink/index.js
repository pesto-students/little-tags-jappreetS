import React from 'react';
import { Link } from 'react-router-dom';

import './CustomLink.scss';

const CustomLink = ({ path, label }) => {
  return (
    <Link to={path} className="CustomLink color-black">
      {label}
    </Link>
  );
};

export default CustomLink;
