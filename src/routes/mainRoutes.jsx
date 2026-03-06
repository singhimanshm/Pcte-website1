import React from 'react';
import { Navigate } from 'react-router-dom';

// Main Pages
import Home from '../pages/home/Home';
import Placements from '../pages/placements/Placements';
import Enquire from '../pages/enquire/Enquire';
import PhotoTour from '../pages/photo-tour/PhotoTour';
import Brochure from '../pages/brochure/Brochure';
import EBrochure from '../pages/e-brochure/EBrochure';
import CourseDetail from '../pages/courses/CourseDetail';
import FacultyListing from '../pages/faculty/FacultyListing';

const mainRoutes = [
    { path: '/', element: <Home /> },
    { path: '/placements', element: <Placements /> },
    { path: '/enquire', element: <Enquire /> },
    { path: '/photo-tour', element: <PhotoTour /> },
    { path: '/brochure', element: <Brochure /> },
    { path: '/e-brochure', element: <EBrochure /> },
    { path: '/courses/:category/:id', element: <CourseDetail /> },
    { path: '/faculty-profile/:department', element: <FacultyListing /> },
    { path: '*', element: <Navigate to="/" replace /> },
];

export default mainRoutes;
