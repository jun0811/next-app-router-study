'use client';

import Link from 'next/link';
import React from 'react';

const Profile = () => {
  return (
    <div>
      <h1>Profile</h1>
      <Link href="/profile/1">profile 1</Link>
      <Link href="/profile/2">profile 2</Link>
      <Link
        href={{
          pathname: '/profile/3',
          query: {
            name: 'iseungjun',
          },
        }}
      >
        profile 3
      </Link>
    </div>
  );
};

export default Profile;
