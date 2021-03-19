<template>
    <li>
        <input type="checkbox" :checked="item.checked" @input="onSwitchItem" />
        {{item.name}}
        <button @click="onRemoveItem">移除</button>
        <input type="text" :value="item.name" @input="onEditItem" />
    </li>
</template>

<script>
export default {
  name: 'TodoItem',
  props: {
    item: Object
  },
  methods: {
      onSwitchItem(e) {
          this.$emit('done', e.target.checked);
      },

      onEditItem(e) {
          this.$emit('eidt', e.target.value);
      },

      onRemoveItem() {
          this.$emit('remove');
      },
  }

}
</script>

<style>
</style>
