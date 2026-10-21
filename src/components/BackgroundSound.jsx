import React, { useEffect, useRef } from 'react';

const BackgroundSound = ({ soundUrl }) => {
    const audioRef = useRef(null);

    useEffect(() => {
        audioRef.current = new Audio(soundUrl);
        audioRef.current.loop = true;
        
        // Autoplay the sound, handling the promise to catch errors
        audioRef.current.play().catch((error) => console.error('Error playing sound:', error));

        return () => audioRef.current && audioRef.current.pause();
    }, [soundUrl]);

    return null; // This component does not render anything
};
export default BackgroundSound;
