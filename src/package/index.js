import LookBoard from "./LookBoard/index.vue";
import LookMore from "./LookMore/index.vue";

const components = [LookBoard, LookMore];
// 批量注册组件
const install = function (Vue) {
  components.forEach((com) => {
    Vue.component(com.name, com);
  });
};
export default install;
