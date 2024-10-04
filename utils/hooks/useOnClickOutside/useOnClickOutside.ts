import React from 'react';

export const useOnClickOutside = (
  ref: React.RefObject<HTMLElement | undefined>,
  callback: () => void
) => {
  const handler = React.useCallback(
    (event: MouseEvent | TouchEvent) => {
      if (ref?.current && !ref.current.contains(event?.target as HTMLElement)) {
        callback();
      }
    },
    [ref, callback]
  );
  React.useEffect(() => {
    document.addEventListener('mousedown', handler);
    document.addEventListener('touchstart', handler);
  }, [ref, handler]);

  return () => {
    document.removeEventListener('mousedown', handler);
    document.removeEventListener('touchstart', handler);
  };
};
