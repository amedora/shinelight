<template>
  <div class="field has-addons">
    <p class="control">
      <a class="commandbox-icon button is-static">
        :
      </a>
    </p>
    <div class="control">
      <command-drop-down :commands="commands" />
    </div>
  </div>
</template>

<script>
import CommandDropDown from './CommandDropDown.vue'

export default {
  name: 'command-box',
  components: {
    CommandDropDown
  },
  data () {
    return {
      commands: {
        'aaa': 'aaa',
        'bbb': 'bbb'
      }
    }
  }
}
</script>

<style scoped>
.commandbox-icon {
  -webkit-app-region: drag;
}
</style>
