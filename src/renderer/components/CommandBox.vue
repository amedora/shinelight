<template>
  <div class="field has-addons">
    <p class="control">
      <a class="commandbox-icon button is-static">
        :
      </a>
    </p>
    <div class="control">
      <command-drop-down :commands="commands" @command-selected="launchCommand" />
    </div>
  </div>
</template>

<script>
import { shell } from 'electron'
import CommandDropDown from './CommandDropDown.vue'

export default {
  name: 'command-box',
  components: {
    CommandDropDown
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
.commandbox-icon {
  -webkit-app-region: drag;
}
</style>
