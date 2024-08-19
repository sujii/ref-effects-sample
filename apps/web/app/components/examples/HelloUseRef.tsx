'use client';
import { useRef } from 'react';

export const HelloUseRef = () => {
  const ignore = useRef(false);

  const logOnce = () => {
    !ignore.current
      ? ignore.current = true
      : console.log('this log will be shown once')
  };

  logOnce();

  return <>Hello useRef component.</>;
};
