<template>
  <div class="container">
    <commander @new-file="onNewFile" />
  </div>
</template>

<script>
import Commander from './Commander.vue'
export default {
  components: {
    Commander
  },
  methods: {
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
