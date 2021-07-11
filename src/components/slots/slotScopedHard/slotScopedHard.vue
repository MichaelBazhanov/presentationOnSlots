<template>
  <div>
    <div class="wrapper">
      <ul>
        <li v-for="(item,idx) in items" :key="idx">
          <slot :element="item + ' default'">Нет значения</slot>
          <slot :element="item + ' test'" name="test">{{item}}</slot>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: Array,
  }
};
</script>

<style>
</style>
