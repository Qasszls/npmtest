<script>
import List from "@/components/SidebarList";
import Detail from "@/components/SidebarDetail";
import WebShow from "@/components/SidebarWebShow";
import { COMPONENTS_NAME } from "@/share/constants.js";
import ContainerWrapper from "@/views/containerWrapper.vue";
export default {
  name: "App",
  components: {
    List,
    Detail,
    WebShow,
    ContainerWrapper,
  },
  data() {
    return {
      componentShow: COMPONENTS_NAME.BLACKBOARD_LIST,
      state: "loading",
    };
  },
  computed: {
    view() {
      let resolve; // 解析的组件
      switch (this.componentShow) {
        case COMPONENTS_NAME.BLACKBOARD_LIST:
          resolve = List;
          break;
        case COMPONENTS_NAME.BLACKBOARD_DETAIL:
          resolve = Detail;
          break;
        case COMPONENTS_NAME.BLACKBOARD_IFRAME:
          resolve = WebShow;
          break;
      }
      return resolve;
    },
  },
};
</script>
<template>
  <div id="container">
    <container-wrapper>
      <component :is="view"></component>
    </container-wrapper>
  </div>
</template>
<style>
.container {
  width: 368px;
  height: calc(100%);
  border: 1px solid #000;
  position: fixed;
  right: 0;
  top: 0;
  cursor: url(@/assets/hand_grab.cur);
}
</style>
