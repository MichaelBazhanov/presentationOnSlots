<template>
  <div>
    <div class="wrapper">
      <div class="header">
        <slot name="header"></slot>
      </div>
      <div class="body">
        <slot name="body"></slot>
      </div>
      <div class="footer">
        <slot name="footer"></slot>
      </div>
      <div class="default">
				<slot name="default"></slot>
			</div>
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