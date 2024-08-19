'use client';
import { useState } from 'react';

export const HelloUseState = () => {
  const [ignore, setIgnore] = useState(false);

  const logOnce = () => {
    !ignore
      ? setIgnore(true)
      : console.log('this log will be shown once, but it will be shown twice...');
  };

  logOnce();

  return <>Hello useState component.</>;
};