<template>
  <div>
    <div class="wrapper">
      <ul>
        <li v-for="item in items" :key="item">
          {{item}}
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

<slotNamed>
  <h1 slot="header">header</h1>
  <h2 slot="body">body</h2>
  <h3 slot="footer">footer</h3>

  <p>default 1</p>
  <p>default 2</p>
  <p>default 3</p>
</slotNamed>