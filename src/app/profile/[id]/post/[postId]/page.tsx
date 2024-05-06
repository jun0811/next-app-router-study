'use client';
import { useParams } from 'next/navigation';
import React from 'react';

const PostIdPage = () => {
  const param = useParams();
  console.log(param.id);
  console.log(param.postId);
  return <div>PostIdPage</div>;
};

export default PostIdPage;
