<template>
  <div class="dropdown" :class="{ 'is-active': isShown }">
    <div class="dropdown-trigger" @click="toggle">
      <command-input v-model="commandText" />
    </div>
    <div class="dropdown-menu" id="dropdown-menu" role="menu">
      <div class="dropdown-content">
        <command-list :commands="matches" />
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
      isShown: false,
      commandText: ''
    }
  },
  methods: {
    toggle () {
      this.isShown = !this.isShown
    }
  },
  computed: {
    matches () {
      return this.commands.filter(e => e.includes(this.commandText))
    }
  }
}
</script>

<style scoped>

</style>
