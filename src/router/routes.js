const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue")
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue")
  },
  {
    path: "/categories",
    name: "Categories",
    component: () => import("../views/Categories.vue")
  }
];

export default routes;
