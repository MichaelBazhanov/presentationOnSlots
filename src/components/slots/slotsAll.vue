<template>
  <div class="wrapper">

    <slotDefault>
      <h3>slotDefault</h3>
    </slotDefault>

    <hr class="bg-white h-1">

    <slotNamed>
      <h1 slot="header">header</h1>

      <template v-slot:body>
        <h2>body</h2>
      </template>

      <template #footer>
        <h3>footer</h3>
      </template>

      <!-- <template #default>
        <h3>default</h3>
      </template> -->
      <!-- <template v-slot:default>
        <h2>default</h2>
      </template> -->

      <p>default 1</p>
      <p>default 2</p>
      <p>default 3</p>
    </slotNamed>

    <hr class="bg-white h-1">

    <slotScopedEasy>
      <template slot-scope="slotsProps">
        <h1> {{ slotsProps.titlename }}</h1>
      </template>
    </slotScopedEasy>

    <hr class="bg-white h-1">

    <slotScopedMedium :items="arr">
    </slotScopedMedium>

    <hr class="bg-white h-1">

    <slotScopedHard :items="arr">
      <!-- <template v-slot:default="slotsProps">
        <h1 class="bg-red-100"> {{ slotsProps.element }}</h1>
      </template> -->
      <template #test="{element}">
        <h2 class="bg-blue-100"> {{element}}</h2>
      </template>
    </slotScopedHard>

    <hr class="bg-white h-1">

    <slotTest v-slot:default="slotsProps" :items="arr">
      <h5>{{slotsProps.test}}</h5>
    </slotTest>
    <!-- <slotTest v-slot:default="slotsProps" :items="arr">
    </slotTest> -->

    <hr class="bg-white h-1">

    <slotNameDynamic @click.native="nextName()">
      <template  v-slot:[idxName]>
        <h1>Динамический слот. # или v-slot:</h1>
      </template>
    </slotNameDynamic>

    <hr class="bg-white h-1">

    <slotClickEmit @onClick="click">
      <template #clickEmit >
        <h1>slotClickEmit</h1>
      </template>
    </slotClickEmit>
    <slotClickEmit @onClick="click2">
      <template #clickEmit >
        <h1 @click="$emit('onClick', 'onClick parent')">slotClickEmit 2</h1>
      </template>
    </slotClickEmit>

  </div>
</template>

<script>
import slotDefault from "./slotDefault";
import slotNamed from "./slotNamed";
import slotScopedEasy from "./slotScopedEasy";
import slotScopedMedium from "./slotScopedMedium";
import slotScopedHard from "./slotScopedHard";
import slotTest from "./slotTest";
import slotNameDynamic from "./slotNameDynamic";
import slotClickEmit from "./slotClickEmit";

export default {
  components: {
    slotDefault,
    slotNamed,
    slotScopedEasy,
    slotScopedMedium,
    slotScopedHard,
    slotTest,
    slotNameDynamic,
    slotClickEmit,
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