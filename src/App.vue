<template>
  <div id="app" class="min-h-screen">
    <slotsAll @childClick="clickChild"></slotsAll>
  </div>
</template>

<script>
import slotsAll from "./components/slots/slotsAll";
export default {
  components: {
    slotsAll,
  },
  methods: {
    clickChild(e) {
      console.log(`Поймал emit на slotsAll.vue компоненте с данными ${e}`)
    },
  }
};
</script>

<style>
</style>
