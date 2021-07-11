<template>
  <div>
    <div class="wrapper">
      <slot titlename="String slotScopedEasy"></slot>
    </div>
  </div>
</template>

<script>
export default {};
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