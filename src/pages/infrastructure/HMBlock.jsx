import React from 'react';
import BaseInfraPage from './BaseInfraPage';

const HMBlock = () => {
    const images = [
        "/PHOTO-TOUR/HM/1.jpg",
        "/PHOTO-TOUR/HM/2.jpg",
        "/PHOTO-TOUR/HM/3.jpg",
        "/PHOTO-TOUR/HM/5.jpg",
        "/PHOTO-TOUR/HM/6.jpg",
        "/PHOTO-TOUR/HM/7.jpg",
        "/PHOTO-TOUR/HM/8.jpg",
        "/PHOTO-TOUR/HM/9.jpg",
        "/PHOTO-TOUR/HM/10.jpg",
        "/PHOTO-TOUR/HM/11.jpg",
        "/PHOTO-TOUR/HM/12.jpg",
        "/PHOTO-TOUR/HM/DSC05742-HDR-1-scaled-1-400x300.jpg",
    ];

    return <BaseInfraPage title="HM Block" images={images} />;
};

export default HMBlock;
