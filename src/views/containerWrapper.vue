<script>
export default {
  data() {
    return {};
  },
};
</script>

<template>
  <div id="wrapper">
    <div class="wrapper-header">我是头</div>
    <slot name="default"></slot>
  </div>
</template>

<style>
.wrapper {
  width: 100%;
  height: 100%;
}
</style>
