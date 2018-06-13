<template>
  <div class="container">
    <commander
      @delete-command="onDeleteCommand"
      @new-file="onNewFile" />
    <modal-delete-command
      :show="showModal"
      :command="commandToDelete"
      @close="showModal = false"
      @command-deleted="$emit('command-deleted')" />
  </div>
</template>

<script>
import Commander from './Commander.vue'
import ModalDeleteCommand from './ModalDeleteCommand.vue'

export default {
  components: {
    Commander,
    ModalDeleteCommand
  },
  data () {
    return {
      showModal: false,
      commandToDelete: {
        name: '',
        path: ''
      }
    }
  },
  methods: {
    onDeleteCommand (command) {
      this.commandToDelete = command
      this.showModal = true
    },
    onNewFile (filePath) {
      this.$router.push({
        name: 'newcommand',
        params: {
          filePath: filePath
        }
      })
    }
  }
}
</script>

<style scoped>
.container {
  margin: 4px;
}
</style>
