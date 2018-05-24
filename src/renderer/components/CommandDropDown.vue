<template>
  <div class="dropdown" :class="{ 'is-active': isShown }">
    <div class="dropdown-trigger" @click="toggle">
      <command-input
        v-model="commandText"
        @input="commandTextChanged"
        @keyup.native.down="down"
        @keyup.native.up="up" />
    </div>
    <div class="dropdown-menu" id="dropdown-menu" role="menu">
      <div class="dropdown-content">
        <command-list :commands="matches" :highlightIndex="highlightIndex" />
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
      commandText: '',
      highlightIndex: 0
    }
  },
  methods: {
    toggle () {
      this.isShown = !this.isShown
    },
    commandTextChanged () {
      this.highlightIndex = 0
      if (!this.isShown) {
        this.isShown = true
      }
    },
    down () {
      if (this.isShown) {
        if (this.highlightIndex < this.matches.length - 1) {
          this.highlightIndex++
        }
      } else {
        this.isShown = true
      }
    },
    up () {
      if (this.isShown) {
        if (this.highlightIndex > 0) {
          this.highlightIndex--
        }
      } else {
        this.isShown = true
      }
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
