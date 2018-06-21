<template>
  <div>
    <div class="columns is-mobile is-centered">
      <div class="column is-half">
        <commander-input
          v-model="commandText"
          @input="commandTextChanged"
          @keyup.native.down="down"
          @keyup.native.up="up"
          @keyup.native.enter="enter" />
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <commander-command-list
          :commands="matches"
          :highlightIndex="highlightIndex"
          @new-file="$emit('new-file', $event)"
          @delete-command="$emit('delete-command', $event)" />
      </div>
    </div>
  </div>
</template>

<script>
import { shell } from 'electron'
import { mapState } from 'vuex'
import CommanderInput from './Commander/CommanderInput.vue'
import CommanderCommandList from './Commander/CommanderCommandList.vue'

export default {
  name: 'commander',
  components: {
    CommanderInput,
    CommanderCommandList
  },
  data () {
    return {
      commandText: '',
      highlightIndex: 0
    }
  },
  computed: {
    ...mapState('CommandList', {
      commandList: 'commandList'
    }),
    matches () {
      return this.commandList
        .filter(e => e.name.includes(this.commandText))
        .sort((a, b) => a.name > b.name)
    },
    selectedCommand () {
      if (this.matches[this.highlightIndex]) {
        return this.matches[this.highlightIndex]
      } else {
        return ''
      }
    }
  },
  methods: {
    commandTextChanged () {
      this.highlightIndex = 0
    },
    launchCommand (command) {
      shell.openExternal(command.path)
    },
    down () {
      if (this.highlightIndex < this.matches.length - 1) {
        this.highlightIndex++
      }
    },
    up () {
      if (this.highlightIndex > 0) {
        this.highlightIndex--
      }
    },
    enter () {
      if (this.selectedCommand) {
        this.launchCommand(this.selectedCommand)
      }
    }
  }
}
</script>

<style scoped>

</style>
