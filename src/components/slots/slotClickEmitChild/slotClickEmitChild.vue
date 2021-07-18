<template>
	<div>
		<div class="parent">
			<slot name="emit"></slot>
		</div>
	</div>
</template>

<script>
export default {
  name: "slotClickEmitChild",
  methods: {
  },
};
</script>

<style>
</style>
//перехват на ребенке всплытия события