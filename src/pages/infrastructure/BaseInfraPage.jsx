import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LazyImage from '../../components/common/LazyImage';

const BaseInfraPage = ({ title, images = [] }) => {
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Disable scroll when lightbox is open
    useEffect(() => {
        if (selectedImage) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [selectedImage]);

    const displayImages = images.length > 0 ? images : Array(12).fill(null);

    return (
        <div className="bg-white min-h-screen font-sans">
            {/* Dark Hero Section */}
            <section className="bg-[#1a1c23] py-8 md:py-12 text-center text-white">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl md:text-5xl font-bold tracking-tight uppercase">
                        {title}
                    </h1>
                </div>
            </section>

            {/* Breadcrumb */}
            <nav className="border-b border-gray-100 bg-white shadow-sm">
                <div className="container mx-auto px-4 py-3 text-sm text-gray-400">
                    <div className="flex items-center space-x-2">
                        <Link to="/" className="hover:text-red-700 transition-colors">Home</Link>
                        <span className="text-gray-300">›</span>
                        <Link to="/photo-tour" className="hover:text-red-700 transition-colors">Infrastructure</Link>
                        <span className="text-gray-300">›</span>
                        <span className="text-gray-600 font-medium">{title}</span>
                    </div>
                </div>
            </nav>

            {/* Image Gallery */}
            <main className="container mx-auto px-4 py-8 md:py-12">
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2">
                    {displayImages.map((src, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-md bg-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                            style={{ aspectRatio: '4/3' }}
                            onClick={() => src && setSelectedImage(src)}
                        >
                            {src ? (
                                <LazyImage
                                    src={src}
                                    alt={`${title} ${index + 1}`}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            ) : (
                                /* Placeholder for empty-image state */
                                <div className="w-full h-full flex flex-col items-center justify-center text-gray-300 bg-gray-50 border-2 border-dashed border-gray-200">
                                    <svg className="w-8 h-8 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
                                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <span className="text-xs font-medium uppercase tracking-wider">No Image</span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Back navigation */}
                <div className="mt-12 text-center">
                    <Link
                        to="/photo-tour"
                        className="inline-flex items-center text-red-700 font-bold hover:gap-2 transition-all"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        BACK TO INFRASTRUCTURE
                    </Link>
                </div>
            </main>

            {/* Lightbox / Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-8"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-6 right-6 text-white hover:text-gray-300 z-[110] transition-colors"
                        onClick={() => setSelectedImage(null)}
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <div
                        className="relative max-w-5xl max-h-full flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={selectedImage}
                            alt="Full size view"
                            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                            decoding="async"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default BaseInfraPage;
