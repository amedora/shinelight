<template>
  <div
    class="commander-command-list"
    @dragover.prevent
    @dragleave.prevent
    @drop.prevent="onDrop">
    <command-list-row
      v-for="(command, index) in commands"
      :class="{ 'has-background-light': index === highlightIndex }"
      :key="command.name"
      :command="command" />
  </div>
</template>

<script>
import CommandListRow from './CommandList/CommandListRow.vue'

export default {
  name: 'commander-command-list',
  components: {
    CommandListRow
  },
  props: ['commands', 'highlightIndex'],
  methods: {
    onDrop (event) {
      const file = event.dataTransfer.files[0]
      this.$emit('new-file', file.path)
    }
  }
}
</script>

<style scoped>
.commander-command-list {
  padding: 8px;
  max-height: 180px;
  overflow-y: auto;
}
</style>
