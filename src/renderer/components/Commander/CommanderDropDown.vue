<template>
  <div class="dropdown" :class="{ 'is-active': isShown }">
    <div class="dropdown-trigger" @click="toggle">
      <commander-drop-down-input
        v-model="commandText"
        @input="commandTextChanged"
        @keyup.native.down="down"
        @keyup.native.up="up"
        @keyup.native.enter="enter" />
    </div>
    <div class="dropdown-menu" id="dropdown-menu" role="menu">
      <div class="dropdown-content">
        <commander-drop-down-list :commands="matches" :highlightIndex="highlightIndex" />
      </div>
    </div>
  </div>
</template>

<script>
import CommanderDropDownInput from './CommanderDropDown/CommanderDropDownInput.vue'
import CommanderDropDownList from './CommanderDropDown/CommanderDropDownList.vue'

export default {
  name: 'commander-drop-down',
  components: {
    CommanderDropDownInput,
    CommanderDropDownList
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
    },
    enter () {
      if (this.selectedCommand) {
        this.$emit('command-selected', this.selectedCommand)
      }
    }
  },
  computed: {
    matches () {
      return this.commands.filter(e => e.includes(this.commandText))
    },
    selectedCommand () {
      if (this.matches[this.highlightIndex]) {
        return this.matches[this.highlightIndex]
      } else {
        return ''
      }
    }
  }
}
</script>

<style scoped>

</style>
