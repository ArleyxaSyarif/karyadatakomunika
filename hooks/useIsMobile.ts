"use client";

import { useState, useEffect } from 'react';

/**
 * Hook to detect if the current viewport is mobile (width < 768px).
 * Useful for disabling animations or changing layouts dynamically.
 */
export const useIsMobile = (threshold: number = 768) => {
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        // Initial check
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth < threshold);
        };

        checkIsMobile();

        // Add event listener
        window.addEventListener('resize', checkIsMobile);

        // Cleanup
        return () => window.removeEventListener('resize', checkIsMobile);
    }, [threshold]);

    return isMobile;
};
