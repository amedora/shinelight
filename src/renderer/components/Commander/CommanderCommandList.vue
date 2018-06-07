<template>
  <div class="commander-command-list">
    <div
      v-for="(command, index) in commands"
      :key="command.name"
      class="box"
      :class="{ 'has-background-light': index === highlightIndex }">
      <nav class="level is-mobile">
        <div class="level-left">
          <div class="level-item">
            <p>{{ command.name }}</p>
          </div>
        </div>
        <div class="level-right">
          <div class="level-item">
            <p class="is-size-7">{{ command.path }}</p>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'commander-command-list',
  props: ['commands', 'highlightIndex']
}
</script>

<style scoped>
.commander-command-list {
  padding: 8px;
  max-height: 180px;
  overflow-y: auto;
}
.box {
  padding: 9px;
  border-radius: 3px;
}
.box:not(:last-child) {
  margin-bottom: 8px;
}
</style>
