<template>
  <div>
    <div class="wrapper">
      <ul>
        <li v-for="item in items" :key="item">
          <slot :test="item" name="default">
            Error!!!
          </slot>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: Array,
  },
};
</script>

<style>
</style>

Сокращённый синтаксис для одиночного слота по умолчанию
https://ru.vuejs.org/v2/guide/components-slots.html#%D0%A1%D0%BE%D0%BA%D1%80%D0%B0%D1%89%D1%91%D0%BD%D0%BD%D1%8B%D0%B9-%D1%81%D0%B8%D0%BD%D1%82%D0%B0%D0%BA%D1%81%D0%B8%D1%81-%D0%B4%D0%BB%D1%8F-%D0%BE%D0%B4%D0%B8%D0%BD%D0%BE%D1%87%D0%BD%D0%BE%D0%B3%D0%BE-%D1%81%D0%BB%D0%BE%D1%82%D0%B0-%D0%BF%D0%BE-%D1%83%D0%BC%D0%BE%D0%BB%D1%87%D0%B0%D0%BD%D0%B8%D1%8E