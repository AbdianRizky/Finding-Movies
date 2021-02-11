const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../pages/Home.vue")
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../pages/About.vue")
  },
  {
    path: "/categories",
    name: "Categories",
    component: () => import("../pages/Categories.vue")
  }
];

export default routes;
