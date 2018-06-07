<template>
  <div>
    <div
      v-for="(command, index) in commands"
      :key="command.name"
      class="box"
      :class="{ 'has-background-light': index === highlightIndex }">
      <nav class="level">
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
