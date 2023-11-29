import { useEffect, useState } from 'react';

export const useRandomPlaceholder = (texts: string[], time: number) => {
  const [currentPlaceholderIndex, setCurrentPlaceholderIndex] =
    useState<number>(0);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const changePlaceholder = () => {
    setCurrentPlaceholderIndex((prevIndex) => (prevIndex + 1) % texts.length);
  };

  useEffect(() => {
    const intervalId = setInterval(changePlaceholder, time);

    return () => clearInterval(intervalId);
  }, [changePlaceholder, time]);

  return texts[currentPlaceholderIndex];
};
