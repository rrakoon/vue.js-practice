Vue.component("todo-footer", {
  template: "<div>전역 컴포넌트</div>",
});

let localcmp = {
  template: "<div>로컬 컴포넌트</div>",
};

let app = new Vue({
  el: "#app",
  data: {
    message: "this is parents components",
  },
  components: {
    "todo-list": localcmp,
  },
});
