import React from 'react';

import Contact from '../pages/contact/Contact';
import ContactDetails from '../pages/contact/ContactDetails';
import Map from '../pages/contact/Map';

const contactRoutes = [
    { path: '/contact', element: <Contact /> },
    { path: '/contact/details', element: <ContactDetails /> },
    { path: '/contact/map', element: <Map /> },
];

export default contactRoutes;
