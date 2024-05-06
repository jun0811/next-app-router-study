'use client';

import { useParams } from 'next/navigation';
import React from 'react';

const ProfileId = () => {
  const param = useParams();
  console.log(param.id);
  console.log(param);
  return <div>ProfileId {param.id} </div>;
};

export default ProfileId;
