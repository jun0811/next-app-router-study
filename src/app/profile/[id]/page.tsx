'use client';

import { useParams, useRouter } from 'next/navigation';
import React from 'react';

const ProfileId = () => {
  const param = useParams();
  console.log(param);
  const router = useRouter();
  return (
    <>
      ProfileId : {param.id}
      <div onClick={() => router.push('/profile')}>Back to main profile</div>
    </>
  );
};

export default ProfileId;
