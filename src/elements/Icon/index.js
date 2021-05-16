import React, { useState, useEffect } from 'react';

const Icon = ({
  name,
  className,
  isBlack = true,
  isClickable = true,
  isDefaultName = false,
  width,
  height,
  ...rest
}) => {
  let [icon, setIcon] = useState('');
  const iconNameSuffix = !!isBlack ? 'black' : 'white';

  useEffect(() => {
    const importIcon = async () => {
      let importedIcon = await import(
        `./../../global/assets/icons/${name}${
          !!isDefaultName ? '' : `-${iconNameSuffix}`
        }.svg`
      );
      setIcon(importedIcon.default);
    };

    importIcon();
  }, [iconNameSuffix, isDefaultName, name]);

  return (
    <img
      alt={name}
      src={icon}
      className={`${!!isClickable ? 'cursor-pointer' : ''} ${
        !!className ? className : ''
      }`}
      width={width}
      height={height}
      {...rest}
    />
  );
};

export default Icon;
