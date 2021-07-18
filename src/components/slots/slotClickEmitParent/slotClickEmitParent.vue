<template>
	<div>
		<div class="parent" @click="$emit('componentClick', 'componentClick')">
			<slot name="emit"></slot>
		</div>
	</div>
</template>

<script>
export default {
  name: "slotClickEmitParent",
  methods: {
  },
};
</script>

<style>
</style>
//перехват на родителе всплытия события
