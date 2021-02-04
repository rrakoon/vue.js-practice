//1. sbiling-component 등록.
//option : template, props

Vue.component("child-component", {
  props: ["propsdata"],
  template: "<p>{{propsdata}}</p>",
});

Vue.component("sibling-component", {
  props: ["sibling_propsdata"],
  template: "<p>{{sibling_propsdata}}</p>",
});

let app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue passed from Parent Component",
    anotherMessage: "new Parent Component",
  },
  //2. data 속성 지정 anotherMessage 임의의 문자열 대입
  //새로 지정한 data속성을 sibling-component의 props에 전달.
});
