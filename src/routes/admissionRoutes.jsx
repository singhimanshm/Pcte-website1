import React from 'react';

import Admission from '../pages/admission/Admission';
import ApplyNow from '../pages/admission/ApplyNow';
import Pay from '../pages/admission/Pay';
import Scholarship from '../pages/admission/Scholarship';

const admissionRoutes = [
    { path: '/admission', element: <Admission /> },
    { path: '/admission/apply', element: <ApplyNow /> },
    { path: '/admission/pay', element: <Pay /> },
    { path: '/admission/scholarship', element: <Scholarship /> },
];

export default admissionRoutes;
