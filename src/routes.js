import React from 'react';

const Dashboard = React.lazy(() => import('./views/Dashboard'));
const Logout = React.lazy(() => import('./views/logout'));
const Wall = React.lazy(() => import('./views/Wall'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/logout', name: 'Logout', component: Logout },
  { path: '/wall', name: 'Avisos', component: Wall },
];

export default routes;
