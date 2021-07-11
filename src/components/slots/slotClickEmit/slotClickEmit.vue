<template>
	<div>
		<div class="parent" @click="$emit('onClick', 'onClick child')">
			<slot name="clickEmit"></slot>
		</div>
	</div>
</template>

<script>
export default {
  name: "clickEmit",
  methods: {
  },
};
</script>

<style>
</style>
