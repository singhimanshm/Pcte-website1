import React from 'react';

import AboutUs from '../pages/about/AboutUs';
import NIRF from '../pages/about/NIRF';
import IKS from '../pages/about/IKS';
import ICMR from '../pages/about/ICMR';
import BHMCTICMR from '../pages/about/BHMCT-ICMR';
import WhyPCTE from '../pages/about/WhyPCTE';
import TrustMembers from '../pages/about/TrustMembers';
import AdvisoryBoard from '../pages/about/AdvisoryBoard';
import ApprovalLetters from '../pages/about/ApprovalLetters';
import Committees from '../pages/about/Committees';
import Grievance from '../pages/about/Grievance';
import Disclosure from '../pages/about/Disclosure';
import ECell from '../pages/about/ECell';
import Transportation from '../pages/about/Transportation';
import Hostels from '../pages/about/Hostels';
import Collaborations from '../pages/about/Collaborations';
import Directions from '../pages/about/Directions';

const aboutRoutes = [
    { path: '/about/us', element: <AboutUs /> },
    { path: '/about/nirf', element: <NIRF /> },
    { path: '/about/iks', element: <IKS /> },
    { path: '/about/icmr', element: <ICMR /> },
    { path: '/about/bhmct-icmr', element: <BHMCTICMR /> },
    { path: '/about/why-pcte', element: <WhyPCTE /> },
    { path: '/about/trust-members', element: <TrustMembers /> },
    { path: '/about/advisory-board', element: <AdvisoryBoard /> },
    { path: '/about/approval-letters', element: <ApprovalLetters /> },
    { path: '/about/committees', element: <Committees /> },
    { path: '/about/grievance', element: <Grievance /> },
    { path: '/about/disclosure', element: <Disclosure /> },
    { path: '/about/e-cell', element: <ECell /> },
    { path: '/about/transportation', element: <Transportation /> },
    { path: '/about/hostels', element: <Hostels /> },
    { path: '/about/collaborations', element: <Collaborations /> },
    { path: '/about/directions', element: <Directions /> },
];

export default aboutRoutes;
