<template>
  <input v-model="commandText" class="input is-primary" type="text" aria-haspopup="true" aria-controls="dropdown-menu">
</template>

<script>
export default {
  name: 'command-input',
  data () {
    return {
      commandText: ''
    }
  }
}
</script>
