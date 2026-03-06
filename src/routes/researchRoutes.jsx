import React from 'react';

import Research from '../pages/research/Research';
import EngineeringTechnology from '../pages/research/EngineeringTechnology';
import PunjabCollege from '../pages/research/PunjabCollege';
import GroupOfInstitutes from '../pages/research/GroupOfInstitutes';

const researchRoutes = [
    { path: '/research', element: <Research /> },
    { path: '/research/engineering-technology', element: <EngineeringTechnology /> },
    { path: '/research/punjab-college', element: <PunjabCollege /> },
    { path: '/research/group-of-institutes', element: <GroupOfInstitutes /> },
];

export default researchRoutes;
