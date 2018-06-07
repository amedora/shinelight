<template>
  <input v-model="commandText" class="input is-primary" type="text" aria-haspopup="true" aria-controls="dropdown-menu">
</template>

<script>
export default {
  name: 'commander-drop-down-input',
  props: {
    value: {
      type: String,
      required: true
    }
  },
  computed: {
    commandText: {
      get () {
        return this.value
      },
      set (newValue) {
        this.$emit('input', newValue)
      }
    }
  }
}
</script>
