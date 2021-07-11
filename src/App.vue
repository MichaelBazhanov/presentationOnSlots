<template>
  <div id="app" class="min-h-screen">

    <slotsAll></slotsAll>

  </div>
</template>

<script>
import slotsAll from "./components/technicalСomponents/slots/slotsAll";

export default {
  components: {
    slotsAll,
  },
  data() {
    return {
      text: "One, Two, Three, Four, Five",
    };
  },
  computed: {
  },
  methods: {
    test(e) {
      console.log(e.target);
    },
    test2(e) {
      console.log(e);
    },
  },
};
</script>

<style>
</style>
    <!-- <div class="m-auto container">
      <div class="flex items-center justify-center w-full flex-wrap">
        <h1 class="cursor-pointer select-none text-5xl text-purple-600 ">Greetings.</h1>
        <div class="flex justify-center">
          <span class="bg-purple-400 text-white bg-opacity-60">Бажанов</span> <span>&#8381;</span>
          <span class="bg-purple-500 text-white bg-opacity-40 test2">Михаил</span> <span>&#36;</span>
          <span class="bg-purple-600 text-white bg-opacity-20 test1">Владимирович</span> <span>&#8364;</span>
        </div>
      </div>
    </div> -->
