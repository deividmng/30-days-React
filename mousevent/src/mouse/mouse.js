import { useEffect, useState } from 'react';

export const useMouseCoordinates = () => {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCoordinates({ x: e.screenX, y: e.screenY });
    };

    // Attach the event listener when the component mounts
    document.body.addEventListener('mousemove', handleMouseMove);

    // Clean up the event listener when the component unmounts
    return () => {
      document.body.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return coordinates;
};
