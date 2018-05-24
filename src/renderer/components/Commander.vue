<template>
  <div class="field has-addons">
    <p class="control">
      <a class="commander-icon button is-static">
        :
      </a>
    </p>
    <div class="control">
      <commander-drop-down :commands="commands" @command-selected="launchCommand" />
    </div>
  </div>
</template>

<script>
import { shell } from 'electron'
import CommanderDropDown from './Commander/CommanderDropDown.vue'

export default {
  name: 'commander',
  components: {
    CommanderDropDown
  },
  data () {
    return {
      commands: ['notepad.exe', 'c:\\home', 'acc']
    }
  },
  methods: {
    launchCommand (path) {
      shell.openExternal(path)
    }
  }
}
</script>

<style scoped>
.commander-icon {
  -webkit-app-region: drag;
}
</style>
