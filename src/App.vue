<script>
export default {
  mounted() {
    console.log(this);
  },
  methods: {
    show() {
      this.isShow = !this.isShow;
    },
  },
  data() {
    return { isShow: false };
  },
};
</script>

<template>
  <div id="app">
    <button @click="show">show some thing</button>
    <look-more :visible="isShow"></look-more>
  </div>
</template>

<style></style>
