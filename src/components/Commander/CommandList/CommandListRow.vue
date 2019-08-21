<template>
  <div class="box">
    <nav class="level is-mobile">
      <div class="level-left">
        <div class="level-item">
          <p>{{ command.name }}</p>
        </div>
      </div>
      <div class="level-right">
        <div class="level-item">
          <p class="is-size-7 command-path">{{ command.path }}</p>
        </div>
        <div class="level-item">
          <a @click="$emit('delete-command', command)" class="delete is-small"></a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'command-list-row',
  props: ['command']
}
</script>

<style scoped>
.box {
  padding: 9px;
  border-radius: 3px;
}
.box:not(:last-child) {
  margin-bottom: 8px;
}
.box .delete {
  position: relative;
  display: none;
}
.box:hover .delete {
  display: block;
}
.command-path {
  max-width: 400px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
