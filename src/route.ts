import { createRouter, createWebHashHistory } from "vue-router";
import About from "./pages/About.vue";
import Portfolio from "./pages/Portfolio.vue";
//import PortfolioDetails from "./pages/PortfolioDetails.vue";
// import pro_boxlang from "./pages/project-boxlang.vue";
import Price from "./pages/Price.vue";
import Resume from "./pages/Resume.vue";
import Blog from "./pages/Blog.vue";
import BlogDetails from "./pages/BlogDetails.vue";
import Contact from "./pages/Contact.vue";
import Products from "./pages/Products.vue";
import ProductDetails from "./pages/ProductDetails.vue";
import Checkout from "./pages/Checkout.vue";
import SecondLayout from "./Layouts/SecondLayout.vue";
import ErrorPage from "./pages/ErrorPage.vue";


// import ProjectBoxlang from "./pages/portfolio/project-boxlang.vue";
// import ProjectJSTours from "./pages/portfolio/project-jstours.vue";

//import PortfolioDetails from "@/pages/PortfolioDetails.vue";

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: About,
      meta: { title: "Portfolify-Portfolify VueJs Template" },
    },
    {
      path: "/portfolio",
      component: Portfolio,
      meta: { title: "Portfolify-Portfolify VueJs Template" },
    },
    


    {
      // path: "/portfolio_details",
      // component: PortfolioDetails,
      // meta: { title: "My Portfolio" },
      // path: "/portfolio_details/:id",
      // name: "PortfolioDetails",
      // component: PortfolioDetails,

      path: '/portfolio/:slug',
      name: 'PortfolioDetails',
      component: () => import('@/pages/PortfolioDetails.vue'),
      
    },


    // {
    //   path: "/project-boxlang",
    //   component: ProjectBoxlang,
    //   meta: { title: "My Portfolio" },
    //  //component: () => import("./pages/project-boxlang.vue")
    // },
    // {
    //   path: "/project-jstours",
    //   component: ProjectJSTours,
    //   meta: { title: "My Portfolio" },
    //   //component: () => import("./pages/project-jstours.vue")
    // },



    
    {
      path: "/price",
      component: Price,
      meta: { title: "Portfolify-Portfolify VueJs Template" },
    },
    {
      path: "/resume",
      component: Resume,
      meta: { title: "My Resume" },
    },
    {
      path: "/blog",
      component: Blog,
      meta: { title: "Portfolify-Portfolify VueJs Template" },
    },
    {
      path: "/blog_details",
      component: BlogDetails,
      meta: { title: "Portfolify-Portfolify VueJs Template" },
    },
    {
      path: "/contact",
      component: Contact,
      meta: { title: "Portfolify-Portfolify VueJs Template" },
    },
    {
      path: "/products",
      component: Products,
      meta: { title: "Portfolify-Portfolify VueJs Template" },
    },
    {
      path: "/products_details",
      component: ProductDetails,
      meta: { title: "Portfolify-Portfolify VueJs Template" },
    },
    {
      path: "/checkout",
      component: Checkout,
      meta: {
        layout: SecondLayout,
        title: "Portfolify-Portfolify VueJs Template",
      },
    },
    {
      path: "/:pathMatch(.*)*",
      component: ErrorPage,
      meta: {
        layout: SecondLayout,
        title: "Portfolify-Portfolify VueJs Template",
      },
    },
  ],
    scrollBehavior() {
    return { top: 0 }
  },
});
