import Image from 'next/image';
import React from 'react';
import open from '../../../public/open.png';
const AboutImage = () => {
  return (
    <div className="w-[800px]">
      About Image
      <Image quality={50} src={open} alt="about image" />
    </div>
  );
};

export default AboutImage;
