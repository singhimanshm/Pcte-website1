import React from 'react';

import LifeAtPCTE from '../pages/life/LifeAtPCTE';
import Stars from '../pages/life/Stars';
import Debate from '../pages/life/Debate';
import TeachingAbroad from '../pages/life/TeachingAbroad';

const lifeRoutes = [
    { path: '/life-at-pcte', element: <LifeAtPCTE /> },
    { path: '/life/stars', element: <Stars /> },
    { path: '/life/debate', element: <Debate /> },
    { path: '/life/teaching-abroad', element: <TeachingAbroad /> },
];

export default lifeRoutes;
