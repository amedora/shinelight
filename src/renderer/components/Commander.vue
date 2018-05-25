<template>
  <div class="field has-addons">
    <p class="control">
      <a class="commander-icon button is-static">
        :
      </a>
    </p>
    <div class="control">
      <commander-drop-down :commands="commandList" @command-selected="launchCommand" />
    </div>
  </div>
</template>

<script>
import { shell } from 'electron'
import { mapState } from 'vuex'
import CommanderDropDown from './Commander/CommanderDropDown.vue'

export default {
  name: 'commander',
  components: {
    CommanderDropDown
  },
  computed: {
    ...mapState('CommandList', {
      commandList: 'commandList'
    })
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
