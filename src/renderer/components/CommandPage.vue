<template>
  <div class="container">
    <commander
      @delete-command="onDeleteCommand"
      @new-file="onNewFile" />
  </div>
</template>

<script>
import Commander from './Commander.vue'
export default {
  components: {
    Commander
  },
  methods: {
    onDeleteCommand (command) {
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
