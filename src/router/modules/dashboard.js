const Dashboard = () => import("@/views/Dashboard/IndexPage.vue");


const routes = [
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
    meta: {
      layout: "DashboardLayout",
      parent: 'dashboard',
      header: "dashboard",
      requiresAuth: true
    },
  },
  
  {
    path: "/",
    name: "dashboard",
    component: Dashboard,
    meta: {
      layout: "DashboardLayout",
      parent: 'dashboard',
      header: "dashboard",
      requiresAuth: true
    },
  },
  
];


export default routes;
