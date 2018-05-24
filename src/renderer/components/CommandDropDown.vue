<template>
  <div class="dropdown" :class="{ 'is-active': isShown }">
    <div class="dropdown-trigger" @click="toggle">
      <command-input />
    </div>
    <div class="dropdown-menu" id="dropdown-menu" role="menu">
      <div class="dropdown-content">
        <command-list :commands="commands" />
      </div>
    </div>
  </div>
</template>

<script>
import CommandInput from './CommandInput.vue'
import CommandList from './CommandList.vue'

export default {
  name: 'command-drop-down',
  components: {
    CommandInput,
    CommandList
  },
  props: ['commands'],
  data () {
    return {
      isShown: false
    }
  },
  methods: {
    toggle () {
      this.isShown = !this.isShown
    }
  }
}
</script>

<style scoped>

</style>
