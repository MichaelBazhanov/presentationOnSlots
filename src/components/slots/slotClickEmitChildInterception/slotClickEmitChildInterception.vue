<template>
	<div>
		<div class="parent" @childClickInterception="test">
			<slot name="emit" @childClickInterception="test"></slot>
		</div>
	</div>
</template>

<script>
export default {
  name: "slotClickEmitChildInterception",
  methods: {
		test(e) {
			console.log(e)
		}
	},
};
</script>

<style>
</style>
//перехват на ребенке всплытия события