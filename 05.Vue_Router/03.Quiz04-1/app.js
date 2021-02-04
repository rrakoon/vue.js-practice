let LoginHeader = {
  template: "<div>This is LoginHeader</div>",
};
let LoginBody = {
  template: "<div>This is LoginBody</div>",
};
let LoginFooter = {
  template: "<div>This is LoginFooter</div>",
};
let MainHeader = {
  template: "<div>This is MainHeader</div>",
};
let MainBody = {
  template: "<div>This is MainBody</div>",
};
let MainFooter = {
  template: "<div>This is MainFooter</div>",
};

let routes = [
  {
    path: "/login",
    components: {
      header: LoginHeader,
      default: LoginBody,
      footer: LoginFooter,
    },
  },
  {
    path: "/",
    components: {
      default: MainBody,
      header: MainHeader,
      footer: MainFooter,
    },
  },
];

let router = new VueRouter({
  routes,
});

let app = new Vue({
  router,
}).$mount("#app");
