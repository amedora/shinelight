<template>
  <div>
    <a
      v-for="(command, index) in commands"
      :key="command.name"
      href="#"
      class="dropdown-item"
      :class="{ 'is-active': index === highlightIndex }">
      {{ command.name }}
    </a>
  </div>
</template>

<script>
export default {
  name: 'commander-drop-down-list',
  props: ['commands', 'highlightIndex']
}
</script>
