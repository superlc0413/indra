import Vue from "vue";
import Router from "vue-router";
import Index from "@/card/index";

Vue.use(Router);

const routerInstance = new Router({
  routes: [
    {
      path: "/",
      redirect: "index"
    },
    {
      path: "/index",
      component: Index,
      name: "index",
      meta: { ch: "首页" }
    }
  ]
});

routerInstance.beforeEach(function(to, from, next) {
  next();
});

export default routerInstance;
