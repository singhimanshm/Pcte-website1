import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

/**
 * LazyImage
 * ─────────
 * Only starts loading the actual image when it is about to enter the viewport
 * (controlled by IntersectionObserver, not the browser's unreliable `loading="lazy"`).
 *
 * Features:
 *  - Shimmer skeleton shown while the image is loading
 *  - Smooth fade-in once loaded
 *  - `rootMargin` of 300px so images start loading a bit before they appear
 *  - `triggerOnce` so the observer is detached after the first intersection (no overhead)
 */
const LazyImage = ({ src, alt, className = '', onClick }) => {
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(false);

    const { ref, inView } = useInView({
        triggerOnce: true,      // stop observing once visible
        rootMargin: '300px 0px', // preload 300px before entering viewport
    });

    return (
        <div ref={ref} className="relative w-full h-full">
            {/* Shimmer skeleton shown until image loads */}
            {(!loaded || !inView) && !error && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-md" />
            )}

            {/* Only render <img> once element enters the observer margin */}
            {inView && !error && (
                <img
                    src={src}
                    alt={alt}
                    decoding="async"
                    onLoad={() => setLoaded(true)}
                    onError={() => setError(true)}
                    onClick={onClick}
                    className={`${className} transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'
                        }`}
                />
            )}

            {/* Error fallback */}
            {error && (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-300 bg-gray-50">
                    <svg className="w-8 h-8 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
                            d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                    </svg>
                    <span className="text-xs">Failed to load</span>
                </div>
            )}
        </div>
    );
};

export default LazyImage;
