<template>
  <div class="wrapper">
    <slotDefaultAbbreviatedSyntax v-slot:default="slotsProps" :items="arr">
    </slotDefaultAbbreviatedSyntax>
  </div>
</template>








<script>
import slotDefault from "./slotDefault";
import slotNamed from "./slotNamed";
import slotScopedEasy from "./slotScopedEasy";
import slotScopedMedium from "./slotScopedMedium";
import slotScopedHard from "./slotScopedHard";
import slotDefaultAbbreviatedSyntax from "./slotDefaultAbbreviatedSyntax";
import slotNameDynamic from "./slotNameDynamic";
import slotClickEmit from "./slotClickEmit";
import slotValueDefault from "./slotValueDefault";

export default {
  components: {
    slotDefault,
    slotNamed,
    slotScopedEasy,
    slotScopedMedium,
    slotScopedHard,
    slotDefaultAbbreviatedSyntax,
    slotNameDynamic,
    slotClickEmit,
    slotValueDefault,
  },
  data() {
    return {
      text: "One, Two, Three, Four, Five",
      idx: 0,
      idxName: 'One',
    };
  },
  computed: {
    arr() {
      return this.text.split(', ')
    }
  },
  methods: {
    nextName() {
      if (this.idx >= 0 && this.arr.length - 1 > this.idx) {
        this.idxName = this.arr[++this.idx];
      } else {
        this.idxName = this.arr[this.idx = 0];
      }
    },
    click() {
			console.log('Поймал emit с дочернего компонента!')
		},
    click2() {
      console.log('Поймал emit с родительского компонента!')
    },
  },
};
</script>

<style lang="css" scoped>
  /* hr {
    background-color: red;
    height: 10px;
  } */
</style>