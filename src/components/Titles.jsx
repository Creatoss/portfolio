import React from 'react';

const Title = ({ title }) => {
  return (
    <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-gray-800 text-center w-full">
      {title}
    </h2>
  );
};

export default Title;
