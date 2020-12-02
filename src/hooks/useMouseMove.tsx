import { useState, useEffect } from 'react';

export default function useMouseMove() {
  function getPosition() {
    return {
      clientX: 300,
      clientY: 300,
    };
  }

  const [mousePosition, setMousePosition] = useState(getPosition);

  useEffect(() => {
    function updateCoordinates(event: MouseEvent) {
      setMousePosition(event);
    }

    window.addEventListener('mousemove', updateCoordinates);
    return () => window.removeEventListener('mousemove', updateCoordinates);
  }, []);

  return mousePosition;
}
