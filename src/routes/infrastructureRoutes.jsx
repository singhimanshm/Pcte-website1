import React from 'react';

import HMBlock from '../pages/infrastructure/HMBlock';
import ETBlock from '../pages/infrastructure/ETBlock';
import MTBlock from '../pages/infrastructure/MTBlock';
import PharmacyBlock from '../pages/infrastructure/PharmacyBlock';
import OutdoorSports from '../pages/infrastructure/OutdoorSports';
import Campus1 from '../pages/infrastructure/Campus1';
import Canteen from '../pages/infrastructure/Canteen';

const infrastructureRoutes = [
    { path: '/infrastructure/hm-block', element: <HMBlock /> },
    { path: '/infrastructure/et-block', element: <ETBlock /> },
    { path: '/infrastructure/mt-block', element: <MTBlock /> },
    { path: '/infrastructure/pharmacy-block', element: <PharmacyBlock /> },
    { path: '/infrastructure/outdoor-sports', element: <OutdoorSports /> },
    { path: '/infrastructure/campus-1', element: <Campus1 /> },
    { path: '/infrastructure/canteen', element: <Canteen /> },
];

export default infrastructureRoutes;
