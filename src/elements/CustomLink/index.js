import React from 'react';
import { Link } from 'react-router-dom';

import './CustomLink.scss';

const CustomLink = ({ className, path, label }) => {
  return (
    <Link
      to={path}
      className={`CustomLink color-black ${!!className ? className : ''}`}
    >
      {label}
    </Link>
  );
};

export default CustomLink;
