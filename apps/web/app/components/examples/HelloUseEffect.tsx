'use client';
import { useEffect } from 'react';

export const HelloUseEffect = () => {
  let ignore = false;

  useEffect(() => {
    if (!ignore) console.log('this log will be shown once');

    return () => {
      ignore = true;
    };
  }, []);

  return <>Hello useEffect component.</>;
};
