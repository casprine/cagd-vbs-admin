
import { lazy } from 'react';
const Dashboard = lazy(()=> import('./pages/Dashboard'));
const ManageMDAS = lazy(()=>import('./pages/MDAs/manage'));

export default [
  { path:'/',name:'Dashboard', component: Dashboard, exact:true },
  { path:'/manage/mdas',name:'Manage MDAs', component: ManageMDAS, exact:true },

]
