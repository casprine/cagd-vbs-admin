
import { lazy } from 'react';
const Dashboard = lazy(()=> import('./pages/Dashboard'));

export default [
  { path:'/',name:'Dashboard', component: Dashboard, exact:true },

]
